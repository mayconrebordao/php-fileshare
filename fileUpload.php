<?php
shell_exec('mkdir uploads/');
shell_exec("mkdir uploads/Documentos/");
shell_exec("mkdir uploads/Imagens/");
shell_exec("mkdir uploads/Videos/");
shell_exec("mkdir uploads/Musicas/");
shell_exec("mkdir uploads/Comprimidos/");
shell_exec("mkdir uploads/Outros/");
shell_exec('chmod 777 -R uploads/*');




function dirSize($directory) {
    $size = 0;
    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory)) as $file){
        $size+=$file->getSize();
    }
    return $size;
}



function showMessage($data){
	echo '
		<div id="message" class="mdl-js-snackbar mdl-snackbar">
		  <div class="mdl-snackbar__text"></div>
		  <button class="mdl-snackbar__action" type="button"></button>
		</div>


	<script >
		 var data =  {message: \'$data\'	};
	  	_("message").MaterialSnackbar.showSnackbar(data);
	    </script>';
}



function checktype($listfile, $file ){
	$extention = explode('.', $file)[count(explode('.', $file))-1];
	$veri = false;
	foreach ($listfile as $aux) {
		// ppp($aux);
		// ppp("|");
		// ppp($extention);
		if($aux == '.'.$extention){
			$veri=true;
			// echo "<script >alert(32);</script>";
			break;
		}
	}
	return $veri;
}

$size = dirSize("uploads/");

if ($size < 1900000000){


	for ($i=0, $n = count($_FILES['file1']); $i < $n ; $i++) { 
		# code...
		$fileName = date ("Y-m-d_h:m")."_".$_FILES["file1"]["name"][$i]; // The file name
		$fileTmpLoc = $_FILES["file1"]["tmp_name"][$i]; // File in the PHP tmp folder
		$fileType = $_FILES["file1"]["type"][$i]; // The type of file it is
		$fileSize = $_FILES["file1"]["size"][$i]; // File size in bytes
		$fileErrorMsg = $_FILES["file1"]["error"][$i]; // 0 for false... and 1 for true
		if (!$fileTmpLoc) { // if file not chosen
		    echo "ERROR: Please browse for a file before clicking the upload button.";
		    exit();
		}



		if(is_file($_FILES['file1']['tmp_name'][$i])){
			$local ="";

			$docs = array('.txt','.doc','.docx','.pdf','.pptx','.odt','.fodt','.ott','.out','.xls');
			$images = array('.jpg','.jpeg','.png','.gif','.webp','.ico','.xdm','.bitmap','.bmp','.xpm','.psd','.jpe','.pgm','.pnm', 'svg');

			$video = array('mp4','mkv','3gp','mov','avi','wmv','3g2','flv','rm','mpg','vob','rmvb');
			$zip = array('zip','7z','tar','xz','gz','rar','bin');

			$music = array('.mp3', 'acc', 'm4a', 'wav', 'wma', 'alac', 'flac');
			// $doc = " /(.txt|.doc|.docx|.pdf|.pptx|.odt|.fodt|.ott|.out|.xls|)$/i";
			// $music = " /(.mp3|acc|m4a|wav|wma|alac|flac|)$/i";
			// $video = " /(mp4|mkv|3gp|mov|avi|wmv|3g2|flv|rm|mpg|vob|rmvb|)$/i";
			// $zip = " /(zip|7z|tar|xz|gz|rar|bin|)$/i";
			// $image = " /(.jpg|.jpeg|.png|.gif|.webp|.ico|.xdm|.bitmap|.bmp|.xpm|.psd|.jpe|.pgm|.pnm|svg|)$/i";
			$extensao = explode('.', $fileName);

			if(checktype($docs, strtolower($fileName))){
				$local = "uploads/Documentos/";
			}
			else if(checktype($images, strtolower($fileName))){
				$local = "uploads/Imagens/";
			}
			else if(checktype($video, strtolower($fileName))){
				$local = "uploads/Videos/";
			}
			else if(checktype($music, strtolower($fileName))){
				$local = "uploads/Musicas/";
			}
			else if(checktype($zip, strtolower($fileName))){
				$local = "uploads/Comprimidos/";
			}
			else{
				$local = "uploads/Outros/";
			}






			if(move_uploaded_file($fileTmpLoc, "$local$fileName")){
			    showMessage("$fileName upload is complete");
			} else {
			    echo "move_uploaded_file function failed";
			    showMessage("Erro no Upload do Arquivo!!");
			}
			shell_exec('chmod 777 -R uploads/*');
		} 
		
	}
	shell_exec('chmod 777 uploads/*');

	// shell_exec('chmod 777 uploads/*');
}


?>
