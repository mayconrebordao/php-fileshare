<?php 
require_once('templates/_adhead.php');
require_once('templates/_functions.php');


 ?>



		<main class="mdl-layout__content ">
			<div class="mdl-grid center-items ">

				
				<div class="homecard-wide mdl-card mdl-shadow--2dp">
				  <div class="mdl-card__title">
				    <h2 class="mdl-card__title-text">Bem Vindo </h2>
				  </div>
				  <div class="mdl-card__supporting-text">
						Seja Vindo Administrador da  livraria Adhonai
				  </div>
				  <div class="mdl-card__actions mdl-card--border">
				    <a href="list.php?tipo=produtos" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
				      Ver Produtos
				    </a>
				  </div>
				  <div class="mdl-card__menu">
				    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
				      <i class="material-icons">share</i>
				    </button>
				  </div>
				</div>

			</div>



		</main>
			<?php require_once("templates/_footer.php"); ?>

	</div>




</body>
</html>