<?php
	echo "asdasdasdsdsds <br>";
   if (isset($_FILES['arquivo']){
      $dir = 'uploads/'; //Diretório para uploads
      // echo '<div class="mdl-card">$dir.$_FILES[\'arquivo\'][\'name\']</div>';
      echo $dir.$_FILES['arquivo']['name'];
      if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $dir.$_FILES['arquivo']['name'])){
      	echo "string";
      	shell_exec('chmod 777 -R '.$dir);

      }
   }
?>


