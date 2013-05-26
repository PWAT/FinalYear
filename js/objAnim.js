
		
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();	
			
			scope = this;
			
			var container, stats;

			var camera, scene, renderer;

			var mouseX = 0, mouseY = 0;
			
			var cameraZoom = 0;
			
			var clock = new THREE.Clock();

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
				var i1 = 'images/Philip/Philip_003_00.jpg';
				loader.load( i1 );
				
				setTimeout(function() {
					scene.remove( i1 )
					texture.dispose( i1 );					
				}, 500);
				// //from here re-order image #
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_05.jpg' );
				// }, 550);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_05.jpg')
					// object.dispose( 'images/Philip30/Philip_003_05.jpg' );				
				// }, 1000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_10.jpg' );
				// }, 1100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_10.jpg')
					// object.dispose( 'images/Philip30/Philip_003_10.jpg' );				
				// }, 1500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_15.jpg' );
				// }, 1600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_15.jpg')
					// object.dispose( 'images/Philip30/Philip_003_15.jpg' );				
				// }, 2000);
				
				// setTimeout(function() {					
					// loader.load( 'images/Philip30/Philip_003_20.jpg' );
				// }, 2100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_20.jpg')
					// object.dispose( 'images/Philip30/Philip_003_20.jpg' );				
				// }, 2500);
				
				setTimeout(function() {
					var i2 = 'images/Philip/Philip_003_25.jpg';
					loader.load( i2 );
				}, 2600);
				
				setTimeout(function() {
					scene.remove(i2)
					texture.dispose( i2 );				
				}, 3000);
				
				setTimeout(function() {
					var i3 = 'images/Philip/Philip_003_26.jpg';
					loader.load( i3 );
				}, 3100);
				
				setTimeout(function() {
					scene.remove(i3)
					texture.dispose( i3 );				
				}, 3500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_27.jpg' );
				// }, 3600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_27.jpg')
				    // object.dispose( 'images/Philip30/Philip_003_27.jpg' );				
				// }, 4000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_28.jpg' );
				// }, 4100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_28.jpg')
					// object.dispose( 'images/Philip30/Philip_003_28.jpg' );				
				// }, 4500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_29.jpg' );
				// }, 4600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_29.jpg')
					// object.dispose( 'images/Philip30/Philip_003_29.jpg' );				
				// }, 5000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_30.jpg' );
				// }, 5100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_30.jpg')
					// object.dispose( 'images/Philip30/Philip_003_30.jpg' );				
				// }, 5500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_31.jpg' );
				// }, 5600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_31.jpg')
					// object.dispose( 'images/Philip30/Philip_003_31.jpg' );				
				// }, 6000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_32.jpg' );
				// }, 6100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_32.jpg')
					// object.dispose( 'images/Philip30/Philip_003_32.jpg' );				
				// }, 6500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_33.jpg' );
				// }, 6600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_33.jpg')
					// object.dispose( 'images/Philip30/Philip_003_33.jpg' );				
				// }, 7000);
				
				setTimeout(function() {
					 var i4 = 'images/Philip/Philip_003_34.jpg';
					loader.load( i4 );
				}, 7100);
				
				setTimeout(function() {
					scene.remove(i4)
					texture.dispose(i4);				
				}, 7500);
				
				// setTimeout(function() {
					// var i5 = 'images/Philip30/Philip_003_35.jpg';
					// loader.load( i5 );
				// }, 7600);
				
				// setTimeout(function() {
					// scene.remove(i5)
					// object.dispose( i5 );				
				// }, 8000);
				// //to here
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_40.jpg' );
				// }, 8100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_40.jpg')
					// object.dispose( 'images/Philip30/Philip_003_40.jpg' );				
				// }, 8500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_45.jpg' );
				// }, 8600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_45.jpg')
					// object.dispose( 'images/Philip30/Philip_003_45.jpg' );				
				// }, 9000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_60.jpg' );
				// }, 9100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_60.jpg')
					// object.dispose( 'images/Philip30/Philip_003_60.jpg' );					
				// }, 9500);
				
				// setTimeout(function() {
					// var i6 = 'images/Philip30/Philip_003_65.jpg';
					// loader.load( i6 );
				// }, 9600);				
				
				// setTimeout(function() {
					// scene.remove(i6)
					// object.dispose( i6 );					
				// }, 10000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_70.jpg' );
				// }, 10100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_70.jpg')
					// object.dispose( 'images/Philip30/Philip_003_70.jpg' );				
				// }, 10500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_75.jpg' );
				// }, 11000);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_75.jpg')
					// object.dispose( 'images/Philip30/Philip_003_75.jpg' );				
				// }, 12000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_80.jpg' );
				// }, 12100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_80.jpg')
					// object.dispose( 'images/Philip30/Philip_003_80.jpg' );				
				// }, 12500);
				
				setTimeout(function() {
					var i7 = 'images/Philip/Philip_003_85.jpg';
					loader.load( i7 );
				}, 12600);
				
				setTimeout(function() {
					scene.remove(i7)
					texture.dispose( i7 );				
				}, 13000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_90.jpg' );
				// }, 13100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_90.jpg')
					// object.dispose( 'images/Philip30/Philip_003_90.jpg' );				
				// }, 14000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_95.jpg' );
				// }, 14100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_95.jpg')
					// object.dispose( 'images/Philip30/Philip_003_95.jpg' );				
				// }, 14500);
				
				setTimeout(function() {
					var i8 = 'images/Philip/Philip_003_99.jpg';
					loader.load( i8 );
				}, 14600);
				
				setTimeout(function() {
					scene.remove(i8)
					texture.dispose( i8 );				
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
				// model
				var o1 = 'images/Philip/Philip_003_00.obj';
				loader.load( o1 );
				
				setTimeout(function() {
					scene.remove('o1')
					geometry.dispose( 'o1' );					
				}, 500);
				//from here re-order image #
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_05.obj' );
				// }, 550);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_05.obj')
					// object.dispose( 'images/Philip30/Philip_003_05.obj' );				
				// }, 1000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_10.obj' );
				// }, 1100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_10.obj')
					// object.dispose( 'images/Philip30/Philip_003_10.obj' );				
				// }, 1500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_15.obj' );
				// }, 1600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_15.obj')
					// object.dispose( 'images/Philip30/Philip_003_15.obj' );				
				// }, 2000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_20.obj' );
				// }, 2100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_20.obj')
					// object.dispose( 'images/Philip30/Philip_003_20.obj' );				
				// }, 2500);
				
				setTimeout(function() {
					var o2 = 'images/Philip/Philip_003_25.obj';
					loader.load( o2 );
				}, 2600);
				
				setTimeout(function() {
					scene.remove(o2)
					geometry.dispose( o2);				
				}, 3000);
				
				setTimeout(function() {
					var o3 = 'images/Philip/Philip_003_26.obj';
					loader.load( o3 );
				}, 3100);
				
				setTimeout(function() {
					scene.remove(o3)
					geometry.dispose( o3 );				
				}, 3500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_27.obj' );
				// }, 3600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_27.obj')
					// object.dispose( 'images/Philip30/Philip_003_27.obj' );				
				// }, 4000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_28.obj' );
				// }, 4100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_28.obj')
					// object.dispose( 'images/Philip30/Philip_003_28.obj' );				
				// }, 4500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_29.obj' );
				// }, 4600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_29.obj')
					// object.dispose( 'images/Philip30/Philip_003_29.obj' );				
				// }, 5000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_30.obj' );
				// }, 5100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_30.obj')
					// object.dispose( 'images/Philip30/Philip_003_30.obj' );				
				// }, 5500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_31.obj' );
				// }, 5600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_31.obj')
					// object.dispose( 'images/Philip30/Philip_003_31.obj' );				
				// }, 6000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_32.obj' );
				// }, 6100);
				
				// setTimeout(function() {	
					// scene.remove('images/Philip30/Philip_003_32.obj')
					// object.dispose( 'images/Philip30/Philip_003_32.obj' );				
				// }, 6500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_33.obj' );
				// }, 6600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_33.obj')
					// object.dispose( 'images/Philip30/Philip_003_33.obj' );				
				// }, 7000);
				
				setTimeout(function() {
					var o4 = 'images/Philip/Philip_003_34.obj';
					loader.load( o4 );
				}, 7100);
				
				setTimeout(function() {
					scene.remove(o4)
					geometry.dispose( o4 );				
				}, 7500);

				// setTimeout(function() {
					 // var o5 = 'images/Philip30/Philip_003_35.obj';
					// loader.load( o5 );
				// }, 7600);
				
				// setTimeout(function() {
					// scene.remove(o5)
					// object.dispose( o5 );				
				// }, 8000);
				// //to here
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_40.obj' );
				// }, 8100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_40.obj')
					// object.dispose( 'images/Philip30/Philip_003_40.obj' );				
				// }, 8500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_45.obj' );
				// }, 8600);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_45.obj')
					// object.dispose( 'images/Philip30/Philip_003_45.obj' );				
				// }, 9000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_60.obj' );
				// }, 9100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_60.obj')
					// object.dispose( 'images/Philip30/Philip_003_60.obj' );					
				// }, 9500);
				
				// setTimeout(function() {
					// var o6 = 'images/Philip30/Philip_003_65.obj' ;
					// loader.load( o6 );
				// }, 9600);				
								
				// setTimeout(function() {
					// scene.remove(o6)
					// object.dispose( o6);					
				// }, 10000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_70.obj' );
				// }, 10100);
			
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_70.obj')
					// object.dispose( 'images/Philip30/Philip_003_70.obj' );				
				// }, 10500);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_75.obj' );
				// }, 11000);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_75.obj')
					// object.dispose( 'images/Philip30/Philip_003_75.obj' );				
				// }, 12000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_80.obj' );
				// }, 12100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_80.obj')
					// object.dispose( 'images/Philip30/Philip_003_80.obj' );				
				// }, 12500);
				
				setTimeout(function() {
					var o7 = 'images/Philip/Philip_003_85.obj';
					loader.load( o7 );
				}, 12600);
				
				setTimeout(function() {
					scene.remove(o7)
					geometry.dispose( o7 );				
				}, 13000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_90.obj' );
				// }, 13100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_90.obj')
					// object.dispose( 'images/Philip30/Philip_003_90.obj' );				
				// }, 14000);
				
				// setTimeout(function() {
					// loader.load( 'images/Philip30/Philip_003_95.obj' );
				// }, 14100);
				
				// setTimeout(function() {
					// scene.remove('images/Philip30/Philip_003_95.obj')
					// object.dispose( 'images/Philip30/Philip_003_95.obj' );				
				// }, 14500);
				
				setTimeout(function() {
					var o8 = 'images/Philip/Philip_003_99.obj';
					loader.load( o8 );
				}, 14600);
				
				setTimeout(function() {
					scene.remove(o8)
					geometry.dispose( o8 );				
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
				
				var start = date.now();
							
				function animate() {
				
					frame = requestAnimationFrame( animate );
				    render();
					
				}
				
				function pause() {
				    cancelAnimationFrame( frame );
					window.webkitCancelAnimationFrame( frame)
				}
				
				function rewind() {							
					
					if ( frame > 0 ) {						
				
					frame -= requestAnimationFrame( animate );
					render();
					
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
												
						default:
						break;
					}
					
				}	
					
				
	
	