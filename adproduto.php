<?php 
require_once('templates/_adhead.php');
require_once('templates/_functions.php');


 ?>



		<main class="mdl-layout__content ">
			<div class="mdl-grid center-items ">
				<div class="mdl-card  mdl-js-card mdl-cell mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet">
				

				<?php


					$produto = $_GET['prod'];
					$categoria = $_GET['cat'];
					$caminho = NULL;
					$data="";
					$data2 = "Editar";
					$botao=NULL;
					if($_GET['option'] == "editar"){
						$data="Atualizar";
						$botao='<button class="mdl-button mdl-js-button mdl-button-colored  mdl-button--raised mdl-js-ripple-effect " style="background-color: red; ">Excluir</button>';
						$caminho='imgs/'.$categoria.'/'.$produto;
					}
					else{
						$data ="Cadastrar";
						$data2=$data;
					}
						echo '
						<form action="">
							<div class="mdl-card--border mdl-card__title">
								<h4 class="mdl-card__title-text">'.$data2.' Produto</h4>
							</div>
							<div  class=" mdl-card__supporting-text">
								<!-- <div id="imagen" style="width: 100px; height: 100px;"></div> -->
								<div class="mdl-textfield mdl-js-textfield">
									<h6>Foto</h6>
									<img id="teste" src="'.$caminho.'" alt="" style="width: 100px; height: 100px;">

									<div class="mdl-textfield mdl-js-textfield mdl-textfield--file" style="color: ;">
										<input class="mdl-textfield__input" placeholder="Nenhum Arquivo" type="text" id="TEXT_ID" readonly  />
										<div class="mdl-button mdl-button--icon mdl-button--file mdl-button--raised mdl-button--colored " >
											<i class="material-icons mdl-js-button mdl-button-raised">attach_file</i>
											<input type= file multiple name="file1[]" id="fileUpload" onchange="document.getElementById("TEXT_ID").value=this.files[0].name;" />
										</div>
									</div>
								</div>
								<div class=""></div>
								
								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<input type="text" id="nomeprod" class="mdl-textfield__input">
									<label for="nomeprod" class="mdl-textfield__label ">Nome</label>
								</div>

								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<textarea name="" id="descprod" class="mdl-textfield__input" cols="30" rows="3"></textarea>
									<label for="descprod" class="mdl-textfield__label ">Descrição</label>
								</div>

								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<input type="text" id="quantprod" class="mdl-textfield__input" maxlength="6" pattern = "[0-9]{1,6}"  >
									<label for="quantprod" class="mdl-textfield__label ">Quantidade</label>
									<label for="qauntprod" class="mdl-textfield__error" >São permitodos apenas numeros</label>
								</div>
								<div class="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
									<input type="text" id="valorprod" class="mdl-textfield__input" maxlength="10" pattern = "[0-9,.]{1,10}">
									<label for="valorprod" class="mdl-textfield__label ">Valor</label>
									<label for="valorprod" class="mdl-textfield__error" >São permitodos apenas numeros</label>

								</div>

							</div>

							<div class="mdl-card__actions mdl-card--border">


								<input type="submit" value="'.$data.'" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="background-color: #31D411;"></input>
										'.$botao.'
							</div>

							
						</form>
						</div>';


						if($_GET["option"]=="editar"){
							$nome = explode('.', $_GET['prod']);
							echo '

								<script>

							document.getElementById("nomeprod").value = "'.$nome[0].'";
							document.getElementById("quantprod").value = "'.$_GET['quant'].'";
							document.getElementById("valorprod").value = "'.$_GET['preco'].'";
							document.getElementById("TEXT_ID").value = "'.$_GET['prod'].'";


							document.getElementById("descprod").value = "Este livro é um grande susseço de vendas, muito premiado, e autamente indicado.";


							</script>

							';							
						}						
				



				 ?>




			</div>



			<?php require_once("templates/_footer.php"); ?>
		</main>

	</div>



	<script>
$("#fileUpload").on('change', function () {
 
    if (typeof (FileReader) != "undefined") {
 
        var image_holder = $("#imagen");
        image_holder.empty();
 
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#teste").attr("src",e.target.result);
        }
        reader.readAsDataURL($(this)[0].files[0]);
    } else{
        alert("Este navegador nao suporta FileReader.");
    }
});
	</script>
</body>
</html>