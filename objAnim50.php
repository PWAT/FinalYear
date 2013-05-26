<?php
include ('/layout.php');

include ('includes/memberAreaHeader.php');

//server timeout time
set_time_limit(5000);

?> 
<div class="sidebar">
	<!-- insert your sidebar items here -->
	<h3>Log In</h3>
		<div id="boxes">		
			<?php			
				 include ('/boxes/member_box.php');	
							 
				 //include ('/boxes/box_admin_links.php');
							 
				 //include ('/boxes/box_main_links.php');
			?>
		</div>
	<h3>Latest News</h3>
		<h4>New Website Launched</h4>
			<h5><?php echo(gmdate(DATE_RFC822) . "<br />"); ?></h5>
				<p>3D and 4D viewer website.<br /><a href="#">Read more</a></p>
	<p></p>
	<h3>Useful Links</h3>
		<ul>
			<li><a href="http://dev.opera.com/articles/view/an-introduction-to-webgl/">Opera webGL</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/WebGL">Mozilla webGL</a></li>
			<li><a href="http://www.kadrmasconcepts.com/blog/2012/01/24/from-blender-to-threefab-exporting-three-js-morph-animations/">JSON export</a></li>
		</ul>
	<h3>Search</h3>
	<form method="post" action="#" id="search_form">
		<p>
			<input class="search" type="text" name="search_field" value="Enter keywords....." />
			<input name="search" type="image" style="border: 0; margin: 0 0 -9px 5px;" src="style/search.png" alt="Search" title="Search" />
		</p>
	</form>
  </div> 
<div id="content">
		<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<span class="btn-navheader">4D image data Demo</span>
						<a href="#" class="btn pause btn-navbar" style="display: block;" onclick="rewind()">Rrwd</a>
						<a href="#" class="btn start btn-navbar" style="display: block;" onclick="forward()">Ffwd</a>
						<a href="objAnim.php" class="btn reset btn-navbar" style="display: block;" >Reset</a>
						<a href="#" class="btn pause btn-navbar" style="display: block;" onclick="pause()">Pause</a>
						<a href="#" class="btn start btn-navbar" style="display: block;" onclick="animate()">Start</a>
				</div>
			</div>
		</div>
		<div id="webgl" oncontextmenu="return false;">
		</div>
		
		<!--Three.js base with code from Three.js API added-->
		
		<script>
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			scope = this;
			
			var container, stats;

			var camera, scene, renderer;

			var mouseX = 0, mouseY = 0;
			
			var cameraZoom = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
						
			init();
			animate();
			
			function init() {

				container = document.getElementById( 'webgl' );
				var width = container.clientWidth;
				var height = container.clientHeight;

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 500;

				// scene

				scene = new THREE.Scene();

				var ambient = new THREE.AmbientLight( 0x101030 );
				scene.add( ambient );

				var directionalLight = new THREE.DirectionalLight( 0xffeedd );
				directionalLight.position.set( 0, 0, 1 ).normalize();
				scene.add( directionalLight );

				// texture

				var texture = new THREE.Texture();

				var loader = new THREE.ImageLoader();
				
				loader.addEventListener( 'load', function ( event ) {

					texture.image = event.content;
					texture.needsUpdate = true;

				} );
				
				// model
				loader.load( 'images/Philip50/Philip_003_00.jpg' );
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_00.jpg' );					
				}, 500);
				//from here re-order image #
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_05.jpg' );
				}, 550);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_05.jpg' );				
				}, 1000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_10.jpg' );
				}, 1100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_10.jpg' );				
				}, 1500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_15.jpg' );
				}, 1600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_15.jpg' );				
				}, 2000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_20.jpg' );
				}, 2100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_20.jpg' );				
				}, 2500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_25.jpg' );
				}, 2600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_25.jpg' );				
				}, 3000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_26.jpg' );
				}, 3100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_26.jpg' );				
				}, 3500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_27.jpg' );
				}, 3600);
				
				setTimeout(function() {
				  renderer.deallocateTexture( 'images/Philip50/Philip_003_27.jpg' );				
				}, 4000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_28.jpg' );
				}, 4100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_28.jpg' );				
				}, 4500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_29.jpg' );
				}, 4600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_29.jpg' );				
				}, 5000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_30.jpg' );
				}, 5100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_30.jpg' );				
				}, 5500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_31.jpg' );
				}, 5600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_31.jpg' );				
				}, 6000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_32.jpg' );
				}, 6100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_32.jpg' );				
				}, 6500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_33.jpg' );
				}, 6600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_33.jpg' );				
				}, 7000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_34.jpg' );
				}, 7100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_34.jpg' );				
				}, 7500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_35.jpg' );
				}, 7600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_35.jpg' );				
				}, 8000);
				//to here
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_40.jpg' );
				}, 8100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_40.jpg' );				
				}, 8500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_45.jpg' );
				}, 8600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_45.jpg' );				
				}, 9000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_60.jpg' );
				}, 9100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_60.jpg' );					
				}, 9500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_65.jpg' );
				}, 9600);				
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_65.jpg' );					
				}, 10000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_70.jpg' );
				}, 10100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_70.jpg' );				
				}, 10500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_75.jpg' );
				}, 11000);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_75.jpg' );				
				}, 12000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_80.jpg' );
				}, 12100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_80.jpg' );				
				}, 12500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_85.jpg' );
				}, 12600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_85.jpg' );				
				}, 13000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_90.jpg' );
				}, 13100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_90.jpg' );				
				}, 14000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_95.jpg' );
				}, 14100);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_95.jpg' );				
				}, 14500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_99.jpg' );
				}, 14600);
				
				setTimeout(function() {
					renderer.deallocateTexture( 'images/Philip50/Philip_003_99.jpg' );				
				}, 15000);
				
				var loader = new THREE.OBJLoader();
				
				loader.addEventListener( 'load', function ( event ) {
					
					var object = event.content;				

					for ( var i = 0, l = object.children.length; i < l; i ++ ) {

						object.children[ i ].material.map = texture;					

					}

					object.position.y = 50;
					
					scene.add( object );
					
					//Remove all objects to end animation
				    setTimeout(function() { scene.remove( object ); },20000);	
										
				});
					
				
					//Works but all on top of each other so setTimeOuts
				loader.load( 'images/Philip50/Philip_003_00.obj' );
				
				// model
				loader.load( 'images/Philip50/Philip_003_00.obj' );
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_00.obj' );					
				}, 500);
				//from here re-order image #
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_05.obj' );
				}, 550);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_05.obj' );				
				}, 1000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_10.obj' );
				}, 1100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_10.obj' );				
				}, 1500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_15.obj' );
				}, 1600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_15.obj' );				
				}, 2000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_20.obj' );
				}, 2100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_20.obj' );				
				}, 2500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_25.obj' );
				}, 2600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_25.obj' );				
				}, 3000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_26.obj' );
				}, 3100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_26.obj' );				
				}, 3500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_27.obj' );
				}, 3600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_27.obj' );				
				}, 4000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_28.obj' );
				}, 4100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_28.obj' );				
				}, 4500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_29.obj' );
				}, 4600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_29.obj' );				
				}, 5000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_30.obj' );
				}, 5100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_30.obj' );				
				}, 5500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_31.obj' );
				}, 5600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_31.obj' );				
				}, 6000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_32.obj' );
				}, 6100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_32.obj' );				
				}, 6500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_33.obj' );
				}, 6600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_33.obj' );				
				}, 7000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_34.obj' );
				}, 7100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_34.obj' );				
				}, 7500);

				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_35.obj' );
				}, 7600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_35.obj' );				
				}, 8000);
				//to here
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_40.obj' );
				}, 8100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_40.obj' );				
				}, 8500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_45.obj' );
				}, 8600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_45.obj' );				
				}, 9000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_60.obj' );
				}, 9100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_60.obj' );					
				}, 9500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_65.obj' );
				}, 9600);				
								
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_65.obj' );					
				}, 10000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_70.obj' );
				}, 10100);
			
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_70.obj' );				
				}, 10500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_75.obj' );
				}, 11000);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_75.obj' );				
				}, 12000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_80.obj' );
				}, 12100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_80.obj' );				
				}, 12500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_85.obj' );
				}, 12600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_85.obj' );				
				}, 13000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_90.obj' );
				}, 13100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_90.obj' );				
				}, 14000);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_95.obj' );
				}, 14100);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_95.obj' );				
				}, 14500);
				
				setTimeout(function() {
					loader.load( 'images/Philip50/Philip_003_99.obj' );
				}, 14600);
				
				setTimeout(function() {
					renderer.deallocateObject( 'images/Philip50/Philip_003_99.obj' );				
				}, 15000);

				if ("WebGLRenderingContext" in window)
					renderer = new THREE.WebGLRenderer();
					else
					renderer = new THREE.CanvasRenderer();
					
					renderer.setSize( width, height );
					
					container.appendChild( renderer.domElement );
					
					document.addEventListener( 'mousemove', onDocumentMouseMove, false );
					
					document.addEventListener( 'mousewheel', onRendererScroll, false);
				
					window.addEventListener( 'resize', onWindowResize, false );
					
					window.addEventListener( 'keydown', onKeyDown, false);

				}

				function onWindowResize() {

					windowHalfX = window.innerWidth / 2;
					windowHalfY = window.innerHeight / 2;

					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight );

				}		

				function onDocumentMouseMove( event ) {

					mouseX = ( event.clientX - windowHalfX ) / 1;
					mouseY = ( event.clientY - windowHalfY ) / 1;

				}
				
				function onRendererScroll( event ) {				
					event.preventDefault();
					if (event.wheelDelta === undefined) {
					  // Firefox
					  // The measurement units of the detail and wheelDelta properties are different.
					  rolled = -10 * event.detail;
					} else {
					  rolled = event.wheelDelta;
					}

					if (rolled > 0) {
					  // up
					  scope.setCameraZoom(+10);
					} else {
					  // down
					  scope.setCameraZoom(-10);
					}
				}
				  
				this.setCameraZoom = function(factor) {
				
					cameraZoom = factor;					
					camera.position.y += factor;
					camera.position.z -= factor;
					
				}

				//  RequestAnimationFrame Shim from 
				//  http://www.kadrmasconcepts.com/blog/2012/05/20/save-battery-life-with-cancelanimationframe/ 
				// Fire off our RAF loop
				// Store our frame id
				var frame;
							
				function animate() {
					frame = requestAnimationFrame( animate );
				    render();
				}
				
				function pause() {
				    cancelAnimationFrame( frame );
				}
				
				function rewind() {
					alert("frame1: "+frame);
						if ( frame > 0 ) {
						frame -= frame-12; 
						alert("frame2: "+frame);
						requestAnimationFrame( animate );
						}
						else {
							frame = 12;
							requestAnimationFrame( animate );
							}				
					
				}
					

				function render() {
				
					camera.position.x += ( mouseX - camera.position.x ) * .1;
					camera.position.y += ( - mouseY - camera.position.y ) * .1;

					camera.lookAt( scene.position );

					renderer.render( scene, camera );
					
				}

				function onKeyDown(event) {
				
					var keyCode = event.keyCode;
					
					switch(keyCode) {
					
						case 80:
							cancelAnimationFrame ( frame );
						break;
						
						case 83:
							animate();
						break;
						
						case 90:
							loader.load( 'images/Philip50/Philip_003_00.obj' );
							animate();
						break;
						
						default:
						break;
					}
					
				}	
					
				
	
		</script>
	
	</div>

<?php
include ('includes/membersFooter.php');
?>