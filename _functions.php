<?php 

function btnlinks($path, $name, $color){
	echo '<a class="mdl-button mdl-js-button" style="color: '.$color.';" href="'.$path.'">'.$name.'</a>';
}


function sitename($name){

	echo '<h3 class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet  mdl-shadow--4dp mdl-cell--hide-desktop mdl-cell--hide-phone " style="text-align: center;width: 100%;margin: 0px; color: white;  ">'.$name.'</h3>';

	echo '<h4 class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet  mdl-shadow--4dp mdl-cell--hide-desktop mdl-cell--hide-tablet " style="text-align: center;width: 100%;margin: 0px; font-size: 26px;  color: white; ">'.$name.'</h4>';

	echo '<h1 class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet  mdl-shadow--4dp mdl-cell--hide-phone mdl-cell--hide-tablet" style="text-align: center;width: 100%;margin: 0px;   color: white; ">'.$name.'</h1>';

}


function ppp($string){
	echo '<br>  <h4 style="color: white;"> '.$string.' </h4> <br>';
}

?>

<!-- <!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>


<span style="margin-left: 10px; margin-right: 10px;">
	



</span>	
</body>
</html> -->


<!-- 

cores 
transparentes
	#f5f5f500
	#b3d4fc00

 -->