<?php 
require_once('templates/_adhead.php');
require_once('templates/_functions.php');


 ?>



		<main class="mdl-layout__content ">
			<div class="mdl-grid center-items ">
				<div class="mdl-card  mdl-js-card mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet">
				

				<?php


				
					$data="";
					$data2 = "Editar";
					$botao=NULL;
					if($_GET['option'] == "editar"){
						$data="Atualizar";
						$botao='<button class="mdl-button mdl-js-button mdl-button-colored  mdl-button--raised mdl-js-ripple-effect " style="background-color: red; ">Excluir</button>';

						
					}
					else{
						$data ="Cadastrar";
						$data2=$data;
					}
						echo '
						<form action="">
							<div class="mdl-card--border mdl-card__title">
								<h4 class="mdl-card__title-text">'.$data2.' Categoria</h4>
							</div>
							<div  class=" mdl-card__supporting-text">
								<!-- <div id="imagen" style="width: 100px; height: 100px;"></div> -->

								
								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<input type="text" id="nomeprod" class="mdl-textfield__input">
									<label for="nomeprod" class="mdl-textfield__label ">Nome</label>
								</div>

								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<textarea name="" id="descprod" class="mdl-textfield__input" cols="30" rows="3" ></textarea>
									<label for="descprod" class="mdl-textfield__label ">Descrição</label>
								</div>

							</div>

							<div class="mdl-card__actions mdl-card--border">


								<input type="submit" value="'.$data.'" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="background-color: #31D411;"></input>
										'.$botao.'
							</div>

							
						</form>
						</div>';

						if($_GET["option"]=="editar"){
							echo '

								<script>

							document.getElementById("nomeprod").value = "'.$_GET['cat'].'";


							document.getElementById("descprod").value = "Este Cetegoria é um grande susseço de vendas, muito premiado, e autamente indicado.";


							</script>

							';							
						}
				



				 ?>




			</div>



			<?php require_once("templates/_footer.php"); ?>
		</main>

	</div>




</body>
</html>