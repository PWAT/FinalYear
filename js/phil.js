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
			model.init({ url : "images/Phil0.js", scale:0.5});			
			app.addModel(model);
			
			app.run();
		}
		);