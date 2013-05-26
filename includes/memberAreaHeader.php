<!DOCTYPE>
<html>

<head>
  <title>OBJ STL Viewer</title>
  <meta name="description" content="A 3D and 4D object file and stl file viewer" />
  <meta name="keywords" content="3D, 4D, viewer, facial gesture analysis, medical application" />
  <meta http-equiv="content-type" content="text/html; charset=windows-1252" />
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="stylesheet" type="text/css" href="style/style.css" />	
    <script src="js/Three.js"></script>
	<script type="text/javascript" src="js/three.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/sim.js"></script>
	<script type="text/javascript" src="js/modelViewer.js"></script>
	<script type="text/javascript" src="js/jsonModel.js"></script>
	<script type="text/javascript" src="js/OBJLoader.js"></script>
	<script type="text/javascript" src="js/Detector.js"></script>
	<script type="text/javascript" src="js/Stats.js"></script>
	
	<script type="text/javascript" src="js/lib/easing/EasePack.min.js"></script>
	<script type="text/javascript" src="js/lib/TimelineLite.min.js"></script>
	<script type="text/javascript" src="js/lib/TweenLite.min.js"></script>
	<script type="text/javascript" src="js/ThreeScene.js"></script>
	<script>
	
		var renderer = null;
		var scene = null;
		var camera = null;
		var mesh = null;
		
		$(document).ready(		
		function() {
			var container = document.getElementById("container");
			
			var app = new ModelViewer();
			app.init({ container: container });
			
			// CC Attribution: model from Blendswap
			// http://www.blendswap.com/blends/characters/monster-galera-man/
			// Author: Daniel F. R Gordillo 
			// http://www.blendswap.com/blends/author/dgordillo/
			var model = new JSONModel();
			model.init({ url : "images/Phil0.js", scale:1.0});			
			app.addModel(model);
			
			app.run();
		  }
		);
	</script>
	
</head>

<body onload="load()">
  <div id="main">
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <!-- class="logo_colour", allows you to change the colour of the text -->
          <h1><a href="index.php">3D and 4D Web Browser<span class="logo_colour">Analysis</span></a></h1>
          <h2>using 3D and 4D model viewing applications.</h2>
        </div>
      </div>
      <div id="menubar">
				<ul class="arrowunderline">
					<li><a href="index.php">OBJ Loader</a></li>
					<li><a href="jsonLoader.php">JSON Loader</a></li>					
					<li><a href="4DImage.php">JSON Player</a></li>
					<li><a href="objAnim.php">4D Player</a></li>
					<li><a href="video.php">Video</a></li>	
				</ul>
      </div>
    </div>
    <div id="content_header"></div>
    <div id="site_content"><!--Start of page specific content-->
<!--Script 1.1 - header.html-->