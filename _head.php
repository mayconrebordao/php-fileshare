<?php require_once('_functions.php'); ?>
<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<title>GreenCloud</title>
	<meta lang="pt-BR">
    <meta name="theme-color" content="#2196F3">
    <meta name="msapplication-navbutton-color" content="#2196F3">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#2196F3">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="turbolinks-cache-control" content="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="A portfolio template that uses Material Design Lite.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">   
	<title></title>
	<link rel="stylesheet" href="css/material.blue_grey-deep_orange.min.css">
	<link rel="stylesheet" href="css/dist/material-design-icons.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/material.min.js"></script>

	<script src="js/jquery.js"></script>
	<script src="js/jquery.form.js"></script>

</head>
<body>
	<!-- Fixed header -->
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" style="  background: url('imgs/background.jpg')center / cover;">
	  <header class="mdl-layout__header mdl-layout__header--transparent">
	    <div class="mdl-layout__header-row">
	      <!-- Title -->
	      <span><a style="text-decoration: none; color: white;" href="/"><span class="mdl-layout-title">Diamond Hosteded Files</span></a></span>
	      <!-- Add spacer, to align navigation to the right -->
	      <div class="mdl-layout-spacer"></div>
	      <!-- Navigation. We hide it in small screens. -->
	      <nav class="mdl-navigation mdl-layout--large-screen-only">
			<?php
	        btnlinks("index.php", 'Home','white');
	        btnlinks("upload.php", "Uploads",'white');
	        btnlinks("download.php", "Dowloads",'white');
	        btnlinks('mdl/index1.html','MDL','white');
        	btnlinks('greencloud-php/', "GreenCloud-PHP",'white');
        	btnlinks("ecomerce/","Ecomerce",'white');
        	btnlinks('stream_videos-php/view-video.php',"Videos", 'white');
	        ?>
	      </nav>
	    </div>
	  </header>
	  <div class="mdl-layout__drawer mdl-layout--small-screen-only">
		<span class="mdl-layout-title"><a style="text-decoration: none; color: black;" href="/"><span ><h5>Diamond Hosteded Files</h5></span></a></span>

	    <nav class="mdl-navigation">
			<?php
	        btnlinks("index.php", 'Home','');
	        btnlinks("upload.php", "Uploads",'');
	        btnlinks("download.php", "Dowloads",'');
	        btnlinks('mdl/index1.html','MDL','');
        	btnlinks('greencloud-php/', "GreenCloud-PHP",'');
        	btnlinks("ecomerce/","Ecomerce",'');
        	btnlinks('stream_videos-php/view-video.php',"Videos",'');
	        ?>

	    </nav>
	  </div>