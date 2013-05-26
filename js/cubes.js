
		
			var container, stats;

			var camera, scene, renderer;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			
			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 10;

				// scene

				scene = new THREE.Scene();

				var ambient = new THREE.AmbientLight( 0x101030 );
				scene.add( ambient );

				var directionalLight = new THREE.DirectionalLight( 0xffeedd );
				directionalLight.position.set( 0, 0, 1 ).normalize();
				scene.add( directionalLight );

				// texture

				var texture = new THREE.Texture();		
		
				var loader = new THREE.OBJLoader();
				loader.addEventListener( 'load', function ( event ) {
					
					var object = event.content;					

						object.position.y =  1;
						
						scene.add( object );
																
						});
					
				
				//Works but all on top of each other so setTimeOuts
				loader.load( 'images/cube.obj' );
				
				setTimeout(function() {
					loader.load( 'images/cube1.obj' );
				}, 2000);
				
				setTimeout(function() {
					loader.load( 'images/cube2.obj' );
				}, 4000);
				
				setTimeout(function() {
					loader.load( 'images/cube3.obj' );
				}, 6000);
				
				setTimeout(function() {
					loader.load( 'images/cube6.obj' );
				}, 8000);			

				setTimeout(function() {
					loader.load( 'images/cubeColour.obj' );
				}, 8000);	

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 100;
				mouseY = ( event.clientY - windowHalfY ) / 100;

			}

			//

			function animate() {
				
				requestAnimationFrame( animate );
				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;

				camera.lookAt( scene.position );

				renderer.render( scene, camera );
				
			}

