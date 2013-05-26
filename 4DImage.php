<?php
include ('/layout.php');

include ('includes/memberAreaHeader.php');


//server timeout time
set_time_limit(5000);
?> 
	
<div id="content">
	<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<span class="btn-navheader">Timeline Demo - Horse</span>
					<a href="#" class="btn reset btn-navbar" style="display: block;">Reset</a>
					<a href="#" class="btn pause btn-navbar" style="display: block;">Pause</a>
					<a href="#" class="btn start btn-navbar" style="display: block;">Start</a>
				</div>
			</div>
		</div>
		<script language="javascript" type="text/javascript">
		
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var width = 1600,
				height = 600,
				camera,
				scene,
				renderer,
				SHADOW_MAP_WIDTH = 2048,
				SHADOW_MAP_HEIGHT = 2048,
				dominoGeometry,
				dominoMaterial,
				dominoPos = 100,
				tweens = [],
				type = 0,
				d = 8,
				basicScene,
				tl = new TimelineLite({ onComplete: complete });

			init();

			function init() {
				
				basicScene = new THREE.BasicScene({ width: width, height: height });
				
				TweenLite.ticker.addEventListener("tick", render);

				initObjects();
			}

			// Horse morph variables.
			var horse;
			var paused = true;
			var theta = 0;

			var duration = 2100;
			var keyframes = 15, interpolation = duration / keyframes;
			var lastKeyframe = 0, currentKeyframe = 0;

			function render() {
				basicScene.renderer.render( basicScene.scene, basicScene.camera );
				
				if ( horse && !paused ) {

					// Alternate morph targets

					var time = Date.now() % duration;

					var keyframe = Math.floor( time / interpolation );

					if ( keyframe != currentKeyframe ) {

						horse.morphTargetInfluences[ lastKeyframe ] = 0;
						horse.morphTargetInfluences[ currentKeyframe ] = 1;
						horse.morphTargetInfluences[ keyframe ] = 0;

						lastKeyframe = currentKeyframe;
						currentKeyframe = keyframe;
					}

					horse.morphTargetInfluences[ keyframe ] = ( time % interpolation ) / interpolation;
					horse.morphTargetInfluences[ lastKeyframe ] = 1 - horse.morphTargetInfluences[ keyframe ];

				}
			}

			function initObjects() {

				dominoGeometry = new THREE.CubeGeometry( 100,100,100,1,1,1 );
				dominoMaterial = new THREE.MeshPhongMaterial();
				dominoMaterial.color = new THREE.Color().setRGB(1,1,1);
				dominoMaterial.ambient = new THREE.Color().setRGB(0.0196078431372549,0.0196078431372549,0.0196078431372549);
				dominoMaterial.specular = new THREE.Color().setRGB(0.06666666666666667,0.06666666666666667,0.06666666666666667);

				var light = new THREE.DirectionalLight();
				light.intensity = 0.7;
				light.castShadow = true;
				light.position.set(-320,350,100);
				basicScene.add( light );

				// Floor
				// var geometry = new THREE.PlaneGeometry( 1800, 800, 3, 3 );
				// var material = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false});
				
				// material.ambient = new THREE.Color().setRGB(0.0196078431372549,0.0196078431372549,0.0196078431372549);
				// material.specular = new THREE.Color().setRGB(0.06666666666666667,0.06666666666666667,0.06666666666666667);

				// var mesh = new THREE.Mesh(geometry, material);
				// mesh.receiveShadow  = true;
				// mesh.position.set(0,-50,0);
				// basicScene.add( mesh );

				initDominoes();
				initHorse();
			}

			function initDominoes() {

				var mesh, i;

				for ( i=0; i < 4; i++ ) {
					mesh = new THREE.Mesh(dominoGeometry, dominoMaterial);
					mesh.position.set(dominoPos,0,0);
					mesh.rotationAutoUpdate = false;
					mesh.castShadow = true;
					mesh.receiveShadow  = false;
					mesh.scale.set(0.1,1,0.4);
					basicScene.add( mesh );
					dominoPos += 50;

					tweens.push( TweenLite.to(mesh.rotation, 2, { y: Math.PI*2, ease: Bounce.easeOut, delay: d * 0.1 + i * 0.2}) );
				}
			}

			function initHorse() {
				
				var loader = new THREE.JSONLoader( true );
				
				loader.load( "images/horse.js", function( geometry ) {

					horse = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x8b6845, morphTargets: true } ) );
					horse.scale.set( 0.75, 0.75, 0.75 );
					horse.position.set( -200, -50, 0);
					horse.rotation.y = Math.PI/2;
					basicScene.add( horse );

					// Click handlers
					$('.start').on('click', start).show();
					$('.pause').on('click', pause).show();
					$('.reset').on('click', complete).show();

					// Horse
					tweens.push( TweenLite.to( horse.position, d, { x: 900 } ) );
					tweens.push( TweenLite.to( horse.position, d * 0.1, { y: 150, delay: d * 0.07, ease: Sine.easeOut } ) );
					tweens.push( TweenLite.to( horse.position, d * 0.12, { y: -50, delay: d * 0.18, ease: Sine.easeIn } ) );

					tl.insertMultiple(tweens);
					tl.pause();
				});
			}

			function pause() {
				paused = true;
				tl.pause();
			}

			function start() {
				paused = false;
				tl.play();
			}

			function complete() {
				pause();
				tl.progress( 0 );
			}


		</script>
	
</div>

