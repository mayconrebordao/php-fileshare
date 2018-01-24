<?php require_once("_head.php"); ?>
		<main class="mdl-layout__content">
			<div class="mdl-grid center-items ">
				<div class="mdl-cell " style="width: 100%;">
			

					<div class="mdl-grid">
						<?php sitename("Upload de Arquivos"); ?>
						<div class="mdl-cell  mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet " style="text-align: center; width: 100%;justify-content: center;">
								<div class="mdl-card mdl-js-card mdl-js-card--transparent mdl-shadow--3dp" style=" background-color: #f5f5f500;" >
									<div class="mdl-card__title mdl-shadow--1dp mdl-card--border" style="text-align: center; justify-content: center;">
										<h3 class="mdl-card__title-text" style="color: white;" >Selecione um Arquivo</h3>
									</div>
									<form id="upload_form" enctype="multipart/form-data" method="post">
										<div class="mdl-card__supporting-text" style="color: white;">
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--file" style="color: white;">
											  <input class="mdl-textfield__input" placeholder="No file chosen" type="text" id="TEXT_ID" readonly  />
											  <div class="mdl-button mdl-button--icon mdl-button--file " >
											    <i class="material-icons mdl-js-button mdl-button-raised">attach_file</i>
											    <input type= file multiple name="file1[]" id="file1" onchange="document.getElementById('TEXT_ID').value=this.files[0].name;" />
											  </div>
											</div>


										  <!-- <progress id="progressBar" value="0" max="100" style="width:300px;"></progress> -->
										  <h3 id="status"></h3>
										  <p id="loaded_n_total"></p>

										  <!-- Simple MDL Progress Bar -->

										<div class="mdl-grid center-items">
											<div class="mdl-cell  mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet"><h5 id="porcent" style="display: none ;"></h5></div>
											<div id="p1" class="mdl-cell  mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet mdl-progress mdl-js-progress" style="display:  none ;"></div>
										</div>


										</div>
										<div class="mdl-card__actions mdl-card--border">
										  		<input onclick="uploadFile()" style="" type="button" value="ENVIAR_cloud_upload"  class="material-icons mdl-button--primary mdl-button mdl-js-button mdl-button--colored mdl-button--raised mdl-js-ripple-effect" style="opacity: 10; color: black;" >
												<!-- <i class="material-icons">cloud_upload</i> -->
											<span class="" >
											</span>
										</div>



									</form>


								</div>
						</div>
					</div>
				</div>
		    </div>
			<div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar">
				<div class="mdl-snackbar__text"></div>
				<button class="mdl-snackbar__action" type="button"></button>
			</div>
			<div id="erroalert" class="mdl-js-snackbar mdl-snackbar">
				<div class="mdl-snackbar__text"></div>
				<button class="mdl-snackbar__action" type="button"></button>
			</div>


	    <?php require_once("_footer.php"); ?>
		</main>
	</div>




<script>

</script>











<script>



	
/* Script written by Adam Khoury @ DevelopPHP.com */
/* Video Tutorial: http://www.youtube.com/watch?v=EraNFJiY0Eg */
function _(el){
	return document.getElementById(el);
}
function uploadFile(){
	// var file = _("file1").files[0];


	// alert(file.name+" | "+file.size+" | "+file.type);
	var formdata = new FormData();
	var numfiles = _("file1").files.length;
	if (numfiles>20){
		alert("É permitido o envio de no maximo 20 Arquivos!");
	}
	else if (numfiles<1) {
		var data = {message: 'Erro! Nenhum Arquivo Selecionado!'};
	 	_("demo-toast-example").MaterialSnackbar.showSnackbar(data);
		
	}
	else{

		for (var i = 0; i < numfiles; i++) {
			formdata.append('file1[]', _("file1").files[i]);
		}

		// formdata.append("file1", file);
		var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST", "fileUpload.php");
		_('porcent').style.display = "";
		_('p1').style.display = "";
		// $('p1').data('style', 'display: all;');
		// _("p1").data('class', ' mdl-progress mdl-js-progress');
		ajax.send(formdata);
	}
}
function progressHandler(event){
	// _("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
	var percent = (event.loaded / event.total) * 100;
	_("p1").MaterialProgress.setProgress(percent);
	_("porcent").innerHTML = Math.round(percent)+"%";
	// _("progressBar").value = Math.round(percent);
	// _("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
}
function completeHandler(event){
	var texto = event.target.responseText;
	// alert(texto[0]);
	
	// alert(texto);
	// _("status").innerHTML = data;
	// _("progressBar").value = 0;
	_("p1").MaterialProgress.setProgress(0);
	 if (texto[0] != 'E' && texto != '') {
  		// _("demo-toast-example").MaterialSnackbar.showSnackbar(data);
  		var numfiles = _("file1").files.length;
  		// alert(numfiles);
  		if (numfiles > 1){

		 var dtt =  {message: 'Arquivos Enviados Com Sussesso! '};
  		}
  		else{
		 var dtt =  {message: 'Arquivo Enviado Com Sussesso! '};

  		}
		 _('erroalert').MaterialSnackbar.showSnackbar(dtt);
	 }
	 else{

	 	alert(texto);
	 	var data = {message: 'Erro Nenhum Arquivo Selecionado!'};
	 	_("demo-toast-example").MaterialSnackbar.showSnackbar(data);

	 }
	_("upload_form").reset();
	_("porcent").innerHTML = "";
	_('porcent').style.display = "none";
	_('p1').style.display = "none";


}
function errorHandler(event){
	// _("status").innerHTML = "Upload Failed";
}
function abortHandler(event){
	_("status").innerHTML = "Upload Aborted";
}






</script>
</body>
</html>