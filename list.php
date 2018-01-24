<?php 
require_once('templates/_adhead.php');
require_once('templates/_functions.php');


 ?>



		<main class="mdl-layout__content ">
			<div class="mdl-grid center-items ">
				<div class="mdl-card  mdl-js-card  ">

					
					<div class="mdl-card__title" style="">
						<h5 class="mdl-card__title-text mdl-card--border">Listar <?php if($_GET["tipo"] == "categoria")echo 'Categoria'; elseif($_GET["tipo"] == "produtos")echo 'Produtos'; ?></h5>
					</div>

					<!-- Data table -->
					<table class="mdl-card__supporting-text mdl-cell mdl-cell--8-col-desktop mdl-cell--4-col-phone mdl-cell--6-col-tablet mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" >
					  <?php 





					  	if($_GET['tipo'] == 'categoria'){
								echo '
							  	<thead>
							    <tr>
							   	  <th class="mdl-data-table__cell--non-numeric"></th>
							      <th class="mdl-data-table__cell--non-numeric">Nome</th>
							      <th class="mdl-data-table__cell--non-numeric">Descriçao</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							    ';
					  		$categoria = array('Romace', 'Terror', 'Fantazia', 'Gospel', 'Infantil');
					  		$descricao = "Este categoria é um grande susseço de vendas, muito premiado, e autamente indicado.";
					  		$i = 0;
					  		foreach ($categoria as $cat) {
					  			echo 
							    '<td><a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="adcategoria.php?option=editar&cat='.$cat.'" title=""><i class="material-icons">add</i></a></td>
							    <td class="mdl-data-table__cell--non-numeric">'.$cat.'</td>
							      <td class="mdl-layout--small-screen-only mdl-data-table__cell--non-numeric maxtext" style="max-width: 30px;overflow: hidden;">'.$descricao.'</td>
							      <td class="mdl-layout--larget-screen-only mdl-data-table__cell--non-numeric maxtext" style="max-width: 500px; ">'.$descricao.'</td>
							    </tr>
							    ';
							    $i++;

					  		}
							    echo '</tbody>';
					  	}
					  	else if($_GET['tipo']=="produtos"){
							echo '
							  	<thead>
							    <tr>

							    <th class="mdl-data-table__cell--non-numeric"></th>
							      <th class="mdl-data-table__cell--non-numeric">Nome</th>
							      <th class="mdl-data-table__cell--non-numeric">Descriçao</th>
							      <th class="mdl-data-table__cell">Quantidade</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							    ';
					  		$categoria = array('romance', 'fantasia', 'terror', 'gospel', 'infantil');
					  		$descricao = "Este livro é um grande susseço de vendas, muito premiado, e autamente indicado.";
					  		$precos = array('170,8', '162,11', '154,14', '146,17', '138,20', '130,23', '122,26', '114,29', '106,32', '98,35', '90,38', '82,41', '74,44', '66,47', '58,50', '50,53', '42,56', '34,59', '26,62', '18,65', '10,68');
					  		foreach ($categoria as $cat) {
					  			$i = 0;
					  			$iterator = new DirectoryIterator("imgs/".$cat);
					  			foreach ($iterator as $file) {
					  				$name = explode('.', $file);
					  				if($file!="." and $file!=".."){
					  					$quantidade = explode(',', $precos[$i]);

									echo '
									<td><a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="adproduto.php?option=editar&cat='.$cat.'&prod='.$file.'&preco='.$precos[$i].'&quant='.$quantidade[0].'" title=""><i class="material-icons">add</i></a></td>


									<td class="mdl-data-table__cell--non-numeric">'.$name[0].'</td>
								      <td class="mdl-data-table__cell--non-numeric maxtext">'.$descricao.'</td>
								    
									<td class="mdl-data-table__cell--non-numeric maxtext">'.$quantidade[0].'</td>
								    </tr>
								    ';
								    $i++;
					  				}
					  				// echo $iterator;
					  			}

					  			
					  		}
					  		 echo '</tbody>';
					  	}
					   ?>
					</table>


				</div>



				<?php


				
				



				 ?>




			</div>



			<?php require_once("templates/_footer.php"); ?>
		</main>

	</div>




</body>
</html>