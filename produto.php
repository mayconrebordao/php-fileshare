<?php require_once("templates/_head.php"); 
	require_once("templates/_geraprods.php");
	require_once("templates/_functions.php");

	$file = $_GET["file"];
	$categoria = $_GET['categoria'];

?>


		<main class="mdl-layout__content">
			<div class="mdl-grid center-items">

				<?php 

				// cat imgs/desc/terror/O Exorcista.jpg.disc



				$path = basename($file);
				$nome = explode('.', $path);
				nomeprod(strtoupper($categoria));
// /home/maycon/Apache2/www/ecomerce/imgs/desc
				$descript = file_get_contents('imgs/desc/'.$categoria.'/'.$path.'.disc');
				// echo 'cat imgs/desc/'.$categoria.'/'.$path.'.disc';
				// echo $descipt;

				echo '
					<div class="mdl-cell mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet mdl-card mdl-js-card mdl-shadow--2dp" style="background-color: #ffffff87;">
						<div class="mdl-card__title">
							<h5 class="mdl-card__title-text">'.$nome[0].'</h5>
						</div>
						<div class="mdl-card__supporting-text" style="background: url(\''.$file.'\');  whith: 350px; height: 250px;">
							<img src="'.$file.'" alt="" style=" whith: 350px; height: 250px;	 ">
						</div>
						<div class="mdl-card__actions mdl-card--border">
							'.$descript.'
						</div>

						<div class="mdl-card__menu">
							<a href="" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
								<i class="material-icons">add_shopping_cart_black</i>
							</a>
						</div>
					</div>
				';




				?>



			</div>

			<?php require_once("templates/_footer.php"); ?>
		</main>

	</div>
</body>
</html>				