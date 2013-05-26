		
			
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();	
			
			scope = this;
			
			var container, stats;

			var camera, scene, renderer;

			var mouseX = 0, mouseY = 0;
			
			var cameraZoom = 0;
			
			var clock = new THREE.Clock();

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
						
			var delta = 0.01;
						
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
					var i1 = 'images/Philip/Philip_003_00.jpg';
					scene.remove( i1 );
					renderer.deallocateTexture( i1 );					
				}, 50);
				
				// //from here re-order image #
				
				setTimeout(function() {				
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
						texture.image = event.content;
						texture.needsUpdate = true;
					} );					
					var i2 = 'images/Philip/Philip_003_01.jpg';
					loader.load( i2 );					
				}, 50);
				
				setTimeout(function() {				
					var i2 = 'images/Philip/Philip_003_01.jpg';
					scene.remove( i2 );
					renderer.deallocateTexture( i2 );					
				}, 100);
				// Commented out as browser cannot render all successfully
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i3 = 'images/Philip/Philip_003_02.jpg';
					// loader.load( i3 );					
				// }, 100);
				
				// setTimeout(function() {				
					// var i3 = 'images/Philip/Philip_003_02.jpg';
					// scene.remove( i3 )
					// renderer.deallocateTexture( i3 );					
				// }, 150);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i4 = 'images/Philip/Philip_003_03.jpg';
					// loader.load( i4 );					
				// }, 150);
				
				// setTimeout(function() {				
					// var i4 = 'images/Philip/Philip_003_03.jpg';
					// scene.remove( i4 )
					// renderer.deallocateTexture( i4 );			
				// }, 200);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i5 = 'images/Philip/Philip_003_04.jpg';
					// loader.load( i5 );					
				// }, 200);
				
				// setTimeout(function() {				
					// var i5 = 'images/Philip/Philip_003_04.jpg';
					// scene.remove( i5 );
					// renderer.deallocateTexture( i5 );					
				// }, 250);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i6 = 'images/Philip/Philip_003_05.jpg';
					// loader.load( i6 );					
				// }, 250);
				
				// setTimeout(function() {				
					// var i6 = 'images/Philip/Philip_003_05.jpg';
					// scene.remove( i6 )
					// renderer.deallocateTexture( i6 );					
				// }, 300);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i7 = 'images/Philip/Philip_003_06.jpg';
					// loader.load( i7 );					
				// }, 300);
				
				// setTimeout(function() {				
					// var i7 = 'images/Philip/Philip_003_06.jpg';
					// scene.remove( i7 )
					// renderer.deallocateTexture( i7 );					
				// }, 350);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i8 = 'images/Philip/Philip_003_07.jpg';
					// loader.load( i8 );					
				// }, 350);
				
				// setTimeout(function() {				
					// var i8 = 'images/Philip/Philip_003_07.jpg';
					// scene.remove( i8 )
					// renderer.deallocateTexture( i8 );					
				// }, 400);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i9 = 'images/Philip/Philip_003_08.jpg';
					// loader.load( i9 );					
				// }, 400);
				
				// setTimeout(function() {				
					// var i9 = 'images/Philip/Philip_003_08.jpg';
					// scene.remove( i9 )
					// renderer.deallocateTexture( i9 );					
				// }, 450);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i10 = 'images/Philip/Philip_003_09.jpg';
					// loader.load( i10 );					
				// }, 450);
				
				// setTimeout(function() {				
					// var i10 = 'images/Philip/Philip_003_09.jpg';
					// scene.remove( i10 )
					// renderer.deallocateTexture( i10 );					
				// }, 500);
				
				setTimeout(function() {				
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );					
					var i11= 'images/Philip/Philip_003_10.jpg';
					loader.load( i11);					
				}, 500);
				
				setTimeout(function() {				
					var i11= 'images/Philip/Philip_003_10.jpg';
					scene.remove( i11)
					renderer.deallocateTexture( i11);					
				}, 550);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i12= 'images/Philip/Philip_003_11.jpg';
					// loader.load( i12);					
				// }, 550);
				
				// setTimeout(function() {				
					// var i12= 'images/Philip/Philip_003_11.jpg';
					// scene.remove( i12);
					// renderer.deallocateTexture( i12 );				
				// }, 600);				
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i13= 'images/Philip/Philip_003_12.jpg';
					// loader.load( i13);					
				// }, 600);
				
				// setTimeout(function() {				
					// var i13= 'images/Philip/Philip_003_12.jpg';
					// scene.remove( i13);
					// renderer.deallocateTexture( i13);					
				// }, 650);

				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i14= 'images/Philip/Philip_003_13.jpg';
					// loader.load( i14);					
				// }, 650);
				
				// setTimeout(function() {				
					// var i14= 'images/Philip/Philip_003_13.jpg';
					// scene.remove( i14);
					// renderer.deallocateTexture( i14);					
				// }, 700);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i15= 'images/Philip/Philip_003_14.jpg';
					// loader.load( i15);					
				// }, 700);
				
				// setTimeout(function() {				
					// var i15= 'images/Philip/Philip_003_14.jpg';
					// scene.remove( i15);
					// renderer.deallocateTexture( i15);					
				// }, 750);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i17= 'images/Philip/Philip_003_16.jpg';
					// loader.load( i17);					
				// }, 750);
				
				// setTimeout(function() {				
					// var i17= 'images/Philip/Philip_003_16.jpg';
					// scene.remove( i17);
					// renderer.deallocateTexture( i17);					
				// }, 800);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i18= 'images/Philip/Philip_003_17.jpg';
					// loader.load( i18);					
				// }, 800);
				
				// setTimeout(function() {				
					// var i18= 'images/Philip/Philip_003_17.jpg';
					// scene.remove( i18);
					// renderer.deallocateTexture( i18);					
				// }, 850);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i19= 'images/Philip/Philip_003_18.jpg';
					// loader.load( i19);					
				// }, 850);
				
				// setTimeout(function() {				
					// var i19= 'images/Philip/Philip_003_18.jpg';
					// scene.remove( i19);
					// renderer.deallocateTexture( i19);					
				// }, 900);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i20= 'images/Philip/Philip_003_19.jpg';
					// loader.load( i20);					
				// }, 900);
				
				// setTimeout(function() {				
					// var i20= 'images/Philip/Philip_003_19.jpg';
					// scene.remove( i20);
					// renderer.deallocateTexture( i20);					
				// }, 950);
				
				setTimeout(function() {	
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );					
					var i21= 'images/Philip/Philip_003_20.jpg';
					loader.load( i21);			
				}, 950);
				
				setTimeout(function() {
					var i21= 'images/Philip/Philip_003_20.jpg';
					scene.remove( i21)
					renderer.deallocateTexture( i21);					
				}, 1000);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i22 = 'images/Philip/Philip_003_21.jpg';
					// loader.load( i22 );					
				// }, 1000);
				
				// setTimeout(function() {				
					// var i22 = 'images/Philip/Philip_003_21.jpg';
					// scene.remove( i22 );
					// renderer.deallocateTexture( i22 );					
				// }, 1050);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i23 = 'images/Philip/Philip_003_22.jpg';
					// loader.load( i23 );					
				// }, 1050);
				
				// setTimeout(function() {				
					// var i23 = 'images/Philip/Philip_003_22.jpg';
					// scene.remove( i23 );
					// renderer.deallocateTexture( i23 );					
				// }, 1100);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i24 = 'images/Philip/Philip_003_23.jpg';
					// loader.load( i24);					
				// }, 1100);
				
				// setTimeout(function() {				
					// var i24= 'images/Philip/Philip_003_12.jpg';
					// scene.remove( i24 );
					// renderer.deallocateTexture( i24 );					
				// }, 1150);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i25 = 'images/Philip/Philip_003_24.jpg';
					// loader.load( i25 );					
				// }, 1150);
				
				// setTimeout(function() {				
					// var i25 = 'images/Philip/Philip_003_24.jpg';
					// scene.remove( i25 );
					// renderer.deallocateTexture( i25 );					
				// }, 1200);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i26 = 'images/Philip/Philip_003_25.jpg';
					// loader.load( i26 );					
				// }, 1200);
				
				// setTimeout(function() {				
					// var i26 = 'images/Philip/Philip_003_25.jpg';
					// scene.remove( i26 );
					// renderer.deallocateTexture( i26 );						
				// }, 1250);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i27 = 'images/Philip/Philip_003_26.jpg';
					// loader.load( i27 );					
				// }, 1250);
				
				// setTimeout(function() {				
					// var i27 = 'images/Philip/Philip_003_26.jpg';
					// scene.remove( i27 );
					// renderer.deallocateTexture( i27 );					
				// }, 1300);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i28 = 'images/Philip/Philip_003_27.jpg';
					// loader.load( i28 );					
				// }, 1300);
				
				// setTimeout(function() {				
					// var i28 = 'images/Philip/Philip_003_27.jpg';
					// scene.remove( i28 );
				    // renderer.deallocateTexture( i28 );					
				// }, 1350);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i29 = 'images/Philip/Philip_003_28.jpg';
					// loader.load( i29 );					
				// }, 1350);
				
				// setTimeout(function() {				
					// var i29 = 'images/Philip/Philip_003_28.jpg';
					// scene.remove(i29);
					// renderer.deallocateTexture( i29 );				
				// }, 1400);	
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i30 = 'images/Philip/Philip_003_29.jpg';
					// loader.load( i30 );					
				// }, 1450);
				
				// setTimeout(function() {
					// var i30 = 'images/Philip/Philip_003_29.jpg';
					// scene.remove(i30)
					// renderer.deallocateTexture( i30 );				
				// }, 1500);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );
					var i31 = 'images/Philip/Philip_003_30.jpg';
					loader.load( i31 );
				}, 1500);
				
				setTimeout(function() {
					var i31 = 'images/Philip/Philip_003_30.jpg';
					scene.remove( i31)
					renderer.deallocateTexture( i31 );				
				}, 1550);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );
					// var i32 = 'images/Philip/Philip_003_31.jpg';
					// loader.load( i32 );
				// }, 1550);
				
				// setTimeout(function() {
					// var i32 = 'images/Philip/Philip_003_31.jpg';
					// scene.remove( i32 )
					// renderer.deallocateTexture( i32 );				
				// }, 1600);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );
					// var i33 = 'images/Philip/Philip_003_32.jpg';
					// loader.load( i33 );
				// }, 1600);
				
				// setTimeout(function() {
					// var i33 = 'images/Philip/Philip_003_32.jpg';
					// scene.remove(i33)
					// renderer.deallocateTexture( i33 );				
				// }, 1700);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );
					// var i34 = 'images/Philip/Philip_003_33.jpg';
					// loader.load( i34 );
				// }, 1700);
				
				// setTimeout(function() {
					// var i34 = 'images/Philip/Philip_003_33.jpg';
					// scene.remove( i34 );
					// renderer.deallocateTexture( i34 );				
				// }, 1750);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );				
					// var i35 = 'images/Philip/Philip_003_34.jpg';
					// loader.load( i35 );					
				// }, 1750);
				
				// setTimeout(function() {				
					// var i35 = 'images/Philip/Philip_003_34.jpg';
					// scene.remove( i35 );
					// renderer.deallocateTexture( i35 );					
				// }, 1800);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i36 = 'images/Philip/Philip_003_35.jpg';
					// loader.load( i36 );					
				// }, 1800);
				
				// setTimeout(function() {
					// var i36 = 'images/Philip/Philip_003_35.jpg';
					// scene.remove( i36 );
					// renderer.deallocateTexture( i36 );					
				// }, 1850);
				// // //to here
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i37= 'images/Philip/Philip_003_36.jpg';
					// loader.load( i37);					
				// }, 1850);
				
				// setTimeout(function() {				
					// var i37 = 'images/Philip/Philip_003_36.jpg';
					// scene.remove( i37 );
					// renderer.deallocateTexture( i37);					
				// }, 1900);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i38= 'images/Philip/Philip_003_37.jpg';
					// loader.load( i38);					
				// }, 1900);
				
				// setTimeout(function() {				
					// var i38 = 'images/Philip/Philip_003_37.jpg';
					// scene.remove( i38 );
					// renderer.deallocateTexture( i38 );					
				// }, 1950);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i39 = 'images/Philip/Philip_003_38.jpg';
					// loader.load( i39 );					
				// }, 1950);
				
				// setTimeout(function() {				
					// var i39 = 'images/Philip/Philip_003_38.jpg';
					// scene.remove( i39 );
					// renderer.deallocateTexture( i39 );					
				// }, 2000);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i40= 'images/Philip/Philip_003_39.jpg';
					// loader.load( i40 );					
				// }, 2000);
				
				// setTimeout(function() {				
					// var i40 = 'images/Philip/Philip_003_39.jpg';
					// scene.remove( i40 );
					// renderer.deallocateTexture( i40 );					
				// }, 2050);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );
					var i41 = 'images/Philip/Philip_003_40.jpg';
					loader.load( i41 );
				}, 2050);
				
				setTimeout(function() {
					var i41 = 'images/Philip/Philip_003_40.jpg';
					scene.remove(i41);
					renderer.deallocateTexture(i41);				
				}, 2100);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i42 = 'images/Philip/Philip_003_41.jpg';
					// loader.load( i42 );					
				// }, 2100);
				
				// setTimeout(function() {				
					// var i42 = 'images/Philip/Philip_003_41.jpg';
					// scene.remove( i42 );
					// renderer.deallocateTexture( i42 );					
				// }, 2150);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i43 = 'images/Philip/Philip_003_42.jpg';
					// loader.load( i43 );					
				// }, 2150);
				
				// setTimeout(function() {				
					// var i43 = 'images/Philip/Philip_003_42.jpg';
					// scene.remove( i43 );
					// renderer.deallocateTexture( i43 );					
				// }, 2200);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i44 = 'images/Philip/Philip_003_43.jpg';
					// loader.load( i44 );					
				// }, 2200);
				
				// setTimeout(function() {				
					// var i44 = 'images/Philip/Philip_003_43.jpg';
					// scene.remove( i44 );
					// renderer.deallocateTexture( i44 );					
				// }, 2250);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i45 = 'images/Philip/Philip_003_44.jpg';
					// loader.load( i45 );					
				// }, 2250);
				
				// setTimeout(function() {				
					// var i45 = 'images/Philip/Philip_003_44.jpg';
					// scene.remove( i45 );
					// renderer.deallocateTexture( i45 );					
				// }, 2300);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );
					// var i46 = 'images/Philip/Philip_003_45.jpg';
					// loader.load( i46 );
				// }, 2300);
				
				// setTimeout(function() {
					// var i46 = 'images/Philip/Philip_003_45.jpg';
					// scene.remove( i46 );
					// renderer.deallocateTexture( i46 );				
				// }, 2350);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i47 = 'images/Philip/Philip_003_46.jpg';
					// loader.load( i47 );					
				// }, 2350);
				
				// setTimeout(function() {				
					// var i47 = 'images/Philip/Philip_003_46.jpg';
					// scene.remove( i47 );
					// renderer.deallocateTexture( i47 );					
				// }, 2400);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i48 = 'images/Philip/Philip_003_47.jpg';
					// loader.load( i48 );
				// }, 2400);
				
				// setTimeout(function() {
					// var i48 = 'images/Philip/Philip_003_47.jpg';
					// scene.remove( i48 );
					// renderer.deallocateTexture( i48 );				
				// }, 2450);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i49 = 'images/Philip/Philip_003_48.jpg';
					// loader.load( i49);					
				// }, 2450);
				
				// setTimeout(function() {				
					// var i49 = 'images/Philip/Philip_003_48.jpg';
					// scene.remove( i49 );
					// renderer.deallocateTexture( i49 );					
				// }, 2500);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i50 = 'images/Philip/Philip_003_49.jpg';
					// loader.load( i50 );
				// }, 2500);
				
				// setTimeout(function() {
					// var i50 = 'images/Philip/Philip_003_49.jpg';
					// scene.remove( i50 );
					// renderer.deallocateTexture( i50 );				
				// }, 2550);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
						texture.image = event.content;
						texture.needsUpdate = true;
					} );
					var i51 = 'images/Philip/Philip_003_50.jpg';
					loader.load( i51 );
				}, 2550);
				
				setTimeout(function() {
					var i51 = 'images/Philip/Philip_003_50.jpg';
					scene.remove( i51 );
					renderer.deallocateTexture( i51 );				
				}, 2600);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i52 = 'images/Philip/Philip_003_51.jpg';
					// loader.load( i52 );
				// }, 2600);
				
				// setTimeout(function() {
					// var i52 = 'images/Philip/Philip_003_51.jpg';
					// scene.remove( i52 );
					// renderer.deallocateTexture( i52 );				
				// }, 2650);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i53 = 'images/Philip/Philip_003_52.jpg';
					// loader.load( i53 );
				// }, 2650);
				
				// setTimeout(function() {
					// var i53 = 'images/Philip/Philip_003_52.jpg';
					// scene.remove( i53 );
					// renderer.deallocateTexture( i53 );				
				// }, 2700);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i54 = 'images/Philip/Philip_003_53.jpg';
					// loader.load( i54 );
				// }, 2700);
				
				// setTimeout(function() {
					// var i54 = 'images/Philip/Philip_003_53.jpg';
					// scene.remove( i54 );
					// renderer.deallocateTexture( i54 );				
				// }, 2750);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i55 = 'images/Philip/Philip_003_54.jpg';
					// loader.load( i55 );
				// }, 2750);
				
				// setTimeout(function() {
					// var i55 = 'images/Philip/Philip_003_54.jpg';
					// scene.remove( i55 );
					// renderer.deallocateTexture( i55 );				
				// }, 2800);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i56 = 'images/Philip/Philip_003_55.jpg';
					// loader.load( i56);
				// }, 2800);
				
				// setTimeout(function() {
					// var i56 = 'images/Philip/Philip_003_55.jpg';
					// scene.remove( i56 );
					// renderer.deallocateTexture( i56 );				
				// }, 2850);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i57 = 'images/Philip/Philip_003_56.jpg';
					// loader.load( i57 );
				// }, 2850);
				
				// setTimeout(function() {
					// var i57 = 'images/Philip/Philip_003_56.jpg';
					// scene.remove( i57 );
					// renderer.deallocateTexture( i57 );				
				// }, 2900);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i58 = 'images/Philip/Philip_003_57.jpg';
					// loader.load( i58 );
				// }, 2900);
				
				// setTimeout(function() {
					// var i58 = 'images/Philip/Philip_003_57.jpg';
					// scene.remove( i58 );
					// renderer.deallocateTexture( i58 );				
				// }, 2950);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i59 = 'images/Philip/Philip_003_58.jpg';
					// loader.load( i59 );
				// }, 2950);
				
				// setTimeout(function() {
					// var i59 = 'images/Philip/Philip_003_58.jpg';
					// scene.remove( i59 );
					// renderer.deallocateTexture( i59 );				
				// }, 3000);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i60 = 'images/Philip/Philip_003_59.jpg';
					// loader.load( i60 );
				// }, 3000);
				
				// setTimeout(function() {
					// var i60 = 'images/Philip/Philip_003_59.jpg';
					// scene.remove( i60 );
					// renderer.deallocateTexture( i60 );				
				// }, 3050);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );
					var i61 = 'images/Philip/Philip_003_60.jpg';
					loader.load( i61 );
				}, 3050);
				
				setTimeout(function() {
					var i61 = 'images/Philip/Philip_003_60.jpg';
					scene.remove(i61)
					renderer.deallocateTexture( i61 );					
				}, 3100);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i63 = 'images/Philip/Philip_003_62.jpg';
					// loader.load( i63 );
				// }, 3100);
				
				// setTimeout(function() {
					// var i63 = 'images/Philip/Philip_003_62.jpg';
					// scene.remove( i63 );
					// renderer.deallocateTexture( i63 );				
				// }, 3150);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i64 = 'images/Philip/Philip_003_63.jpg';
					// loader.load( i64 );
				// }, 3150);
				
				// setTimeout(function() {
					// var i64 = 'images/Philip/Philip_003_63.jpg';
					// scene.remove( i64 );
					// renderer.deallocateTexture( i64 );				
				// }, 3200);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i65 = 'images/Philip/Philip_003_64.jpg';
					// loader.load( i65 );
				// }, 3200);
				
				// setTimeout(function() {
					// var i65 = 'images/Philip/Philip_003_64.jpg';
					// scene.remove( i65 );
					// renderer.deallocateTexture( i65 );				
				// }, 3250);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );					
					// var i66 = 'images/Philip/Philip_003_65.jpg';
					// loader.load( i66 );					
				// }, 3250);				
				
				// setTimeout(function() {	
					// var i66 = 'images/Philip/Philip_003_65.jpg';
					// scene.remove(i66)
					// renderer.deallocateTexture( i66 );						
				// }, 3300);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i67 = 'images/Philip/Philip_003_66.jpg';
					// loader.load( i67 );					
				// }, 3300);				
				
				// setTimeout(function() {	
					// var i67 = 'images/Philip/Philip_003_66.jpg';
					// scene.remove(i67)
					// renderer.deallocateTexture( i67 );						
				// }, 3350);
						
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i68 = 'images/Philip/Philip_003_67.jpg';
					// loader.load( i68 );					
				// }, 3350);				
				
				// setTimeout(function() {	
					// var i68 = 'images/Philip/Philip_003_67.jpg';
					// scene.remove(i68)
					// renderer.deallocateTexture( i68 );						
				// }, 3400);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i69 = 'images/Philip/Philip_003_68.jpg';
					// loader.load( i69 );					
				// }, 3400);				
				
				// setTimeout(function() {	
					// var i69 = 'images/Philip/Philip_003_68.jpg';
					// scene.remove(i69);
					// renderer.deallocateTexture( i69 );						
				// }, 3450);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );					
					// var i70 = 'images/Philip/Philip_003_69.jpg';
					// loader.load( i70 );					
				// }, 3450);				
				
				// setTimeout(function() {	
					// var i70 = 'images/Philip/Philip_003_69.jpg';
					// scene.remove(i70)
					// renderer.deallocateTexture( i70 );						
				// }, 3500);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );	
					var i71 = 'images/Philip/Philip_003_70.jpg';
					loader.load( i71 );
				}, 3500);
				
				setTimeout(function() {
					var i71 = 'images/Philip/Philip_003_70.jpg';
					scene.remove(i71);
					renderer.deallocateTexture( i71 );				
				}, 3550);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i72 = 'images/Philip/Philip_003_71.jpg';
					// loader.load( i72 );
				// }, 3550);
				
				// setTimeout(function() {
					// var i72 = 'images/Philip/Philip_003_71.jpg';
					// scene.remove(i72);
					// renderer.deallocateTexture( i72 );				
				// }, 3600);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i73 = 'images/Philip/Philip_003_72.jpg';
					// loader.load( i73 );
				// }, 3600);
				
				// setTimeout(function() {
					// var i73 = 'images/Philip/Philip_003_72.jpg';
					// scene.remove(i73);
					// renderer.deallocateTexture( i73 );				
				// }, 3650);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i74 = 'images/Philip/Philip_003_73.jpg';
					// loader.load( i74 );
				// }, 3650);
				
				// setTimeout(function() {
					// var i74 = 'images/Philip/Philip_003_73.jpg';
					// scene.remove(i74);
					// renderer.deallocateTexture( i74 );				
				// }, 3700);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i75 = 'images/Philip/Philip_003_74.jpg';
					// loader.load( i75 );
				// }, 3700);
				
				// setTimeout(function() {
					// var i75 = 'images/Philip/Philip_003_74.jpg';
					// scene.remove(i75);
					// renderer.deallocateTexture( i75 );				
				// }, 3750);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
					// } );
					// var i76 = 'images/Philip/Philip_003_75.jpg';
					// loader.load( i76 );
				// }, 3750);
				
				// setTimeout(function() {
					// var i76 = 'images/Philip/Philip_003_75.jpg';
					// scene.remove(i76)
					// renderer.deallocateTexture(i76);				
				// }, 3800);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i77 = 'images/Philip/Philip_003_76.jpg';
					// loader.load( i77 );
				// }, 3800);
				
				// setTimeout(function() {
					// var i77 = 'images/Philip/Philip_003_76.jpg';
					// scene.remove(i77);
					// renderer.deallocateTexture( i77 );				
				// }, 3850);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i78 = 'images/Philip/Philip_003_77.jpg';
					// loader.load( i78 );
				// }, 3850);
				
				// setTimeout(function() {
					// var i78 = 'images/Philip/Philip_003_77.jpg';
					// scene.remove(i78);
					// renderer.deallocateTexture( i78 );				
				// }, 3900);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i79 = 'images/Philip/Philip_003_78.jpg';
					// loader.load( i79 );
				// }, 3900);
				
				// setTimeout(function() {
					// var i79 = 'images/Philip/Philip_003_78.jpg';
					// scene.remove(i79);
					// renderer.deallocateTexture( i79 );				
				// }, 3950);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );	
					// var i80 = 'images/Philip/Philip_003_79.jpg';
					// loader.load( i80 );
				// }, 3950);
				
				// setTimeout(function() {
					// var i80 = 'images/Philip/Philip_003_79.jpg';
					// scene.remove(i80);
					// renderer.deallocateTexture( i80 );				
				// }, 4000);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
					} );
					var i81 =  'images/Philip/Philip_003_80.jpg' ;
					loader.load( i81 );
				}, 4000);
				
				setTimeout(function() {
					var i81 =  'images/Philip/Philip_003_80.jpg';
					scene.remove(i81);
					renderer.deallocateTexture( i81);				
				}, 4550);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i82 =  'images/Philip/Philip_003_81.jpg' ;
					// loader.load( i82 );
				// }, 4550);
				
				// setTimeout(function() {
					// var i82 =  'images/Philip/Philip_003_81.jpg';
					// scene.remove(i82);
					// renderer.deallocateTexture( i82);				
				// }, 4600);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i83 =  'images/Philip/Philip_003_82.jpg' ;
					// loader.load( i83 );
				// }, 4600);
				
				// setTimeout(function() {
					// var i83 =  'images/Philip/Philip_003_82.jpg';
					// scene.remove(i83);
					// renderer.deallocateTexture( i83);				
				// }, 4650);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i84 =  'images/Philip/Philip_003_83.jpg' ;
					// loader.load( i84);
				// }, 4650);
				
				// setTimeout(function() {
					// var i84 =  'images/Philip/Philip_003_83.jpg';
					// scene.remove(i84);
					// renderer.deallocateTexture( i84);				
				// }, 4700);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i85 =  'images/Philip/Philip_003_84.jpg' ;
					// loader.load( i85);
				// }, 4700);
				
				// setTimeout(function() {
					// var i85 =  'images/Philip/Philip_003_84.jpg';
					// scene.remove(i85);
					// renderer.deallocateTexture( i85);				
				// }, 4750);
				
				// setTimeout(function() {				
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );				
					// var i86 = 'images/Philip/Philip_003_85.jpg';
					// loader.load( i86 );
				// }, 4750);
				
				// setTimeout(function() {
					// var i86 = 'images/Philip/Philip_003_85.jpg';
					// scene.remove( i86 );
					// renderer.deallocateTexture( i86 );					
				// }, 4800);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i87 =  'images/Philip/Philip_003_86.jpg' ;
					// loader.load( i87 );
				// }, 4800);
				
				// setTimeout(function() {
					// var i87 =  'images/Philip/Philip_003_86.jpg';
					// scene.remove(i87);
					// renderer.deallocateTexture( i87);				
				// }, 4850);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i88 =  'images/Philip/Philip_003_87.jpg' ;
					// loader.load( i88);
				// }, 4850);
				
				// setTimeout(function() {
					// var i88 =  'images/Philip/Philip_003_87.jpg';
					// scene.remove(i88);
					// renderer.deallocateTexture( i88);				
				// }, 4900);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i89 =  'images/Philip/Philip_003_88.jpg' ;
					// loader.load( i89 );
				// }, 4900);
				
				// setTimeout(function() {
					// var i89 =  'images/Philip/Philip_003_88.jpg';
					// scene.remove(i89);
					// renderer.deallocateTexture( i89);				
				// }, 4950);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i90 =  'images/Philip/Philip_003_89.jpg' ;
					// loader.load( i90 );
				// }, 4950);
				
				// setTimeout(function() {
					// var i90 =  'images/Philip/Philip_003_89.jpg';
					// scene.remove(i90);
					// renderer.deallocateTexture( i90);				
				// }, 5000);
				
				setTimeout(function() {
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
				} );
					var i91 = 'images/Philip/Philip_003_90.jpg';
					loader.load( i91 );
				}, 5000);
				
				setTimeout(function() {
					var i91 = 'images/Philip/Philip_003_90.jpg';
					scene.remove( i91 );
					renderer.deallocateTexture( i91 );				
				}, 5050);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i92 = 'images/Philip/Philip_003_91.jpg';
					// loader.load( i92 );
				// }, 5050);
				
				// setTimeout(function() {
					// var i92 = 'images/Philip/Philip_003_91.jpg';
					// scene.remove( i92 );
					// renderer.deallocateTexture( i92 );				
				// }, 5100);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i93 = 'images/Philip/Philip_003_92.jpg';
					// loader.load( i93);
				// }, 5100);
				
				// setTimeout(function() {
					// var i93 = 'images/Philip/Philip_003_92.jpg';
					// scene.remove( i93 );
					// renderer.deallocateTexture( i93 );				
				// }, 5150);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i94 = 'images/Philip/Philip_003_93.jpg';
					// loader.load( i94);
				// }, 5150);
				
				// setTimeout(function() {
					// var i94 = 'images/Philip/Philip_003_93.jpg';
					// scene.remove( i94 );
					// renderer.deallocateTexture( i94 );				
				// }, 5200);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i95 = 'images/Philip/Philip_003_94.jpg';
					// loader.load( i95 );
				// }, 5200);
				
				// setTimeout(function() {
					// var i95 = 'images/Philip/Philip_003_94.jpg';
					// scene.remove( i95 );
					// renderer.deallocateTexture( i95 );				
				// }, 5250);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
					// texture.image = event.content;
					// texture.needsUpdate = true;
				// } );
					// var i96 = 'images/Philip/Philip_003_95.jpg';
					// loader.load( i96 );
				// }, 5250);
				
				// setTimeout(function() {
					// var i96 = 'images/Philip/Philip_003_95.jpg';
					// scene.remove(i96);
					// renderer.deallocateTexture( i96 );				
				// }, 5300);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i97 = 'images/Philip/Philip_003_96.jpg';
					// loader.load( i97 );
				// }, 5300);
				
				// setTimeout(function() {
					// var i97 = 'images/Philip/Philip_003_96.jpg';
					// scene.remove( i97 );
					// renderer.deallocateTexture( i97 );				
				// }, 5350);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i98 = 'images/Philip/Philip_003_97.jpg';
					// loader.load( i98 );
				// }, 5350);
				
				// setTimeout(function() {
					// var i98 = 'images/Philip/Philip_003_97.jpg';
					// scene.remove( i98 );
					// renderer.deallocateTexture( i98 );				
				// }, 5400);
				
				// setTimeout(function() {
					// var loader = new THREE.ImageLoader();				
					// loader.addEventListener( 'load', function ( event ) {
						// texture.image = event.content;
						// texture.needsUpdate = true;
					// } );
					// var i99 = 'images/Philip/Philip_003_98.jpg';
					// loader.load( i99 );
				// }, 5400);
				
				// setTimeout(function() {
					// var i99 = 'images/Philip/Philip_003_98.jpg';
					// scene.remove( i99 );
					// renderer.deallocateTexture( i99 );				
				// }, 5450);
				
				setTimeout(function() {					
					var loader = new THREE.ImageLoader();				
					loader.addEventListener( 'load', function ( event ) {
					texture.image = event.content;
					texture.needsUpdate = true;
				} );				
					var i100 = 'images/Philip/Philip_003_99.jpg';
					loader.load( i100 );					
				}, 5450);
				
				setTimeout(function() {				
					var i100 = 'images/Philip/Philip_003_99.jpg';
					scene.remove( i100 );
					renderer.deallocateTexture( i100 );					
				}, 5500);
				
				var loader = new THREE.OBJLoader();				
				loader.addEventListener( 'load', function ( event ) {					
					var object = event.content;
					for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						object.children[ i ].material.map = texture;
					}
					object.position.y = 50;					
					scene.add( object );					
					//Remove all objects to end animation
				    setTimeout(function() { scene.remove( object ); },8000);											
				});
					
				
				//Works but all on top of each other so setTimeOuts				
				// model
				var o1 = 'images/Philip/Philip_003_00.obj';
				loader.load( o1 );
				
				setTimeout(function() {
					var o1 = 'images/Philip/Philip_003_00.obj';
					scene.remove(o1 );
					renderer.deallocateObject( o1 );					
				}, 50);
				
				// //from here re-order image #
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o2 = 'images/Philip/Philip_003_01.obj';
					// loader.load( o2 );					
				// }, 50);
				
				// setTimeout(function() {				
					// var o2 = 'images/Philip/Philip_003_01.obj';
					// scene.remove(o2 )
					// renderer.deallocateObject( o2 );					
				// }, 100);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });		
					// var o3 = 'images/Philip/Philip_003_02.obj';
					// loader.load( o3 );					
				// }, 100);
				
				// setTimeout(function() {				
					// var o3 = 'images/Philip/Philip_003_02.obj';
					// scene.remove(o3 )
					// renderer.deallocateObject( o3 );					
				// }, 150);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o4 = 'images/Philip/Philip_003_03.obj';
					// loader.load( o4 );					
				// }, 150);
				
				// setTimeout(function() {				
					// var o4 = 'images/Philip/Philip_003_03.obj';
					// scene.remove(o4 )
					// renderer.deallocateObject( o4 );			
				// }, 200);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });	
					// var o5 = 'images/Philip/Philip_003_04.obj';
					// loader.load( o5 );					
				// }, 200);
				
				// setTimeout(function() {				
					// var o5 = 'images/Philip/Philip_003_04.obj';
					// scene.remove(o5 )
					// renderer.deallocateObject( o5 );					
				// }, 250);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o6 = 'images/Philip/Philip_003_05.obj';
					// loader.load( o6 );					
				// }, 250);
				
				// setTimeout(function() {				
					// var o6 = 'images/Philip/Philip_003_05.obj';
					// scene.remove(o6 )
					// renderer.deallocateObject( o6 );					
				// }, 300);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o7 = 'images/Philip/Philip_003_06.obj';
					// loader.load( o7 );					
				// }, 300);
				
				// setTimeout(function() {				
					// var o7 = 'images/Philip/Philip_003_06.obj';
					// scene.remove(o7 )
					// renderer.deallocateObject( o7 );					
				// }, 350);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o8 = 'images/Philip/Philip_003_07.obj';
					// loader.load( o8 );					
				// }, 350);
				
				// setTimeout(function() {				
					// var o8 = 'images/Philip/Philip_003_07.obj';
					// scene.remove(o8 )
					// renderer.deallocateObject( o8 );					
				// }, 400);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o9 = 'images/Philip/Philip_003_08.obj';
					// loader.load( o9 );					
				// }, 400);
				
				// setTimeout(function() {				
					// var o9 = 'images/Philip/Philip_003_08.obj';
					// scene.remove(o9 )
					// renderer.deallocateObject( o9 );					
				// }, 450);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o10 = 'images/Philip/Philip_003_09.obj';
					// loader.load( o10 );					
				// }, 450);
				
				// setTimeout(function() {				
					// var o10 = 'images/Philip/Philip_003_09.obj';
					// scene.remove(o10 )
					// renderer.deallocateObject( o10 );					
				// }, 500);
				
				setTimeout(function() {				
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
					var object = event.content;				
					for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						object.children[ i ].material.map = texture;
					}
					object.position.y = 50;					
					scene.add( object );											
				});					
					var o11 = 'images/Philip/Philip_003_10.obj';
					loader.load( o11);					
				}, 500);
				
				setTimeout(function() {				
					var o11= 'images/Philip/Philip_003_10.obj';
					scene.remove(o11)
					renderer.deallocateObject( o11);					
				}, 550);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o12= 'images/Philip/Philip_003_11.obj';
					// loader.load( o12);					
				// }, 550);
				
				// setTimeout(function() {				
					// var o12= 'images/Philip/Philip_003_11.obj';
					// scene.remove(o12);
					// renderer.deallocateObject( o12 );				
				// }, 600);				
				
				// setTimeout(function() {				
				// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o13= 'images/Philip/Philip_003_12.obj';
					// loader.load( o13);					
				// }, 600);
				
				// setTimeout(function() {				
					// var o13= 'images/Philip/Philip_003_12.obj';
					// scene.remove(o13);
					// renderer.deallocateObject( o13);					
				// }, 650);

				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o14= 'images/Philip/Philip_003_13.obj';
					// loader.load( o14);					
				// }, 650);
				
				// setTimeout(function() {				
					// var o14= 'images/Philip/Philip_003_13.obj';
					// scene.remove(o14);
					// renderer.deallocateObject( o14);					
				// }, 700);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o15= 'images/Philip/Philip_003_14.obj';
					// loader.load( o15);					
				// }, 700);
				
				// setTimeout(function() {				
					// var o15= 'images/Philip/Philip_003_14.obj';
					// scene.remove(o15);
					// renderer.deallocateObject( o15);					
				// }, 750);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
						// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });			
					// var o16= 'images/Philip/Philip_003_15.obj';
					// loader.load( o16);					
				// }, 750);
				
				// setTimeout(function() {				
					// var o16 = 'images/Philip/Philip_003_15.obj';
					// scene.remove(o16);
					// renderer.deallocateObject( o16);					
				// }, 800);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o17= 'images/Philip/Philip_003_16.obj';
					// loader.load( o17);					
				// }, 800);
				
				// setTimeout(function() {				
					// var o17= 'images/Philip/Philip_003_16.obj';
					// scene.remove(o17);
					// renderer.deallocateObject( o17);					
				// }, 850);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });					
					// var o18= 'images/Philip/Philip_003_17.obj';
					// loader.load( o18);					
				// }, 850);
				
				// setTimeout(function() {				
					// var o18= 'images/Philip/Philip_003_17.obj';
					// scene.remove(o18);
					// renderer.deallocateObject( o18);					
				// }, 900);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o19= 'images/Philip/Philip_003_18.obj';
					// loader.load( o19);					
				// }, 900);
				
				// setTimeout(function() {				
					// var o19= 'images/Philip/Philip_003_18.obj';
					// scene.remove(o19);
					// renderer.deallocateObject( o19);					
				// }, 950);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o20= 'images/Philip/Philip_003_19.obj';
					// loader.load( o20);					
				// }, 950);
				
				// setTimeout(function() {				
					// var o20= 'images/Philip/Philip_003_19.obj';
					// scene.remove(o20);
					// renderer.deallocateObject( o20);					
				// }, 1000);
				
				setTimeout(function() {	
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
					var object = event.content;				
					for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						object.children[ i ].material.map = texture;
					}
					object.position.y = 50;					
					scene.add( object );											
				});				
					var o21= 'images/Philip/Philip_003_20.obj';
					loader.load( o21);			
				}, 2100);
				
				setTimeout(function() {
					var o21= 'images/Philip/Philip_003_20.obj';
					scene.remove(o21)
					renderer.deallocateObject( o21);					
				}, 2500);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o22 = 'images/Philip/Philip_003_21.obj';
					// loader.load( o22 );					
				// }, 550);
				
				// setTimeout(function() {				
					// var o22 = 'images/Philip/Philip_003_21.obj';
					// scene.remove(o22 );
					// renderer.deallocateObject( o22 );					
				// }, 1000);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
					// });				
					// var o23 = 'images/Philip/Philip_003_22.obj';
					// loader.load( o23);					
				// }, 550);
				
				// setTimeout(function() {				
					// var o23 = 'images/Philip/Philip_003_22.obj';
					// scene.remove(o23);
					// renderer.deallocateObject( o23 );					
				// }, 1000);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o24 = 'images/Philip/Philip_003_23.obj';
					// loader.load( o24);					
				// }, 550);
				
				// setTimeout(function() {				
					// var o24 = 'images/Philip/Philip_003_23.obj';
					// scene.remove(o24);
					// renderer.deallocateObject( o24 );					
				// }, 1000);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o25 = 'images/Philip/Philip_003_24.obj';
					// loader.load( o25 );					
				// }, 1000);
				
				// setTimeout(function() {				
					// var o25 = 'images/Philip/Philip_003_24.obj';
					// scene.remove(o25 );
					// renderer.deallocateObject( o25 );					
				// }, 1050);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o26 = 'images/Philip/Philip_003_25.obj';
					// loader.load( o26 );					
				// }, 1050);
				
				// setTimeout(function() {				
					// var o26 = 'images/Philip/Philip_003_25.obj';
					// scene.remove(o26 );
					// renderer.deallocateObject( o26 );						
				// }, 1100);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o27 = 'images/Philip/Philip_003_26.obj';
					// loader.load( o27 );					
				// }, 1100);
				
				// setTimeout(function() {				
					// var o27 = 'images/Philip/Philip_003_26.obj';
					// scene.remove(o27 );
					// renderer.deallocateObject( o27 );					
				// }, 1150);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o28 = 'images/Philip/Philip_003_27.obj';
					// loader.load( o28 );					
				// }, 1150);
				
				// setTimeout(function() {				
					// var o28 = 'images/Philip/Philip_003_27.obj';
					// scene.remove(o28 );
				  // renderer.deallocateObject( o28 );					
				// }, 1200);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o29 = 'images/Philip/Philip_003_28.obj';
					// loader.load( o29 );					
				// }, 1200);
				
				// setTimeout(function() {				
					// var o29 = 'images/Philip/Philip_003_28.obj';
					// scene.remove(o29);
					// renderer.deallocateObject( o29 );				
				// }, 1250);	
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o30 = 'images/Philip/Philip_003_29.obj';
					// loader.load( o30 );					
				// }, 1250);
				
				// setTimeout(function() {
					// var o30 = 'images/Philip/Philip_003_29.obj';
					// scene.remove(o30)
					// renderer.deallocateObject( o30 );				
				// }, 1300);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
					var object = event.content;				
					for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						object.children[ i ].material.map = texture;
					}
					object.position.y = 50;					
					scene.add( object );											
				});
					var o31 = 'images/Philip/Philip_003_30.obj';
					loader.load( o31 );
				}, 1300);
				
				setTimeout(function() {
					var o31 = 'images/Philip/Philip_003_30.obj';
					scene.remove(o31)
					renderer.deallocateObject( o31 );				
				}, 1350);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });
					// var o32 = 'images/Philip/Philip_003_31.obj';
					// loader.load( o32 );
				// }, 1350);
				
				// setTimeout(function() {
					// var o32 = 'images/Philip/Philip_003_31.obj';
					// scene.remove(o32 )
					// renderer.deallocateObject( o32 );				
				// }, 1400);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });
					// var o33 = 'images/Philip/Philip_003_32.obj';
					// loader.load( o33 );
				// }, 1400);
				
				// setTimeout(function() {
					// var o33 = 'images/Philip/Philip_003_32.obj';
					// scene.remove(o33)
					// renderer.deallocateObject( o33 );				
				// }, 1450);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });
					// var o34 = 'images/Philip/Philip_003_33.obj';
					// loader.load( o34 );
				// }, 1450);
				
				// setTimeout(function() {
					// var o34 = 'images/Philip/Philip_003_33.obj';
					// scene.remove(o34 );
					// renderer.deallocateObject( o34 );				
				// }, 1500);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });			
					// var o35 = 'images/Philip/Philip_003_34.obj';
					// loader.load( o35 );					
				// }, 1500);
				
				// setTimeout(function() {				
					// var o35 = 'images/Philip/Philip_003_34.obj';
					// scene.remove(o35 );
					// renderer.deallocateObject( o35 );					
				// }, 1550);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });					
					// var o36 = 'images/Philip/Philip_003_35.obj';
					// loader.load( o36 );					
				// }, 1550);
				
				// setTimeout(function() {
					// var o36 = 'images/Philip/Philip_003_35.obj';
					// scene.remove(o36 );
					// renderer.deallocateObject( o36 );					
				// }, 1600);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });				
					// var o37 = 'images/Philip/Philip_003_36.obj';
					// loader.load( o37 );					
				// }, 1600);
				
				// setTimeout(function() {
					// var o37 = 'images/Philip/Philip_003_36.obj';
					// scene.remove(o37 );
					// renderer.deallocateObject( o37 );					
				// }, 1650);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
					// }
					// object.position.y = 50;					
					// scene.add( object );											
				// });					
					// var o38= 'images/Philip/Philip_003_37.obj';
					// loader.load( o38);					
				// }, 1700);
				
				// setTimeout(function() {				
					// var o38 = 'images/Philip/Philip_003_37.obj';
					// scene.remove(o38 );
					// renderer.deallocateObject( o38 );					
				// }, 1750);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
					// var object = event.content;				
					// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
						// object.children[ i ].material.map = texture;
				// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o39 = 'images/Philip/Philip_003_38.obj';
					// loader.load( o39 );					
				// }, 1750);
				
				// setTimeout(function() {
					// var o39 = 'images/Philip/Philip_003_38.obj';
					// scene.remove(o39 );
					// renderer.deallocateObject( o39 );					
				// }, 1800);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });				
					// var o40= 'images/Philip/Philip_003_39.obj';
					// loader.load( o40 );					
				// }, 1800);
				
				// setTimeout(function() {				
					// var o40 = 'images/Philip/Philip_003_39.obj';
					// scene.remove(o40 );
					// renderer.deallocateObject( o40 );					
				// }, 1850);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});
					var o41 = 'images/Philip/Philip_003_40.obj';
					loader.load( o41 );
				}, 1850);
				
				setTimeout(function() {
					var o41 = 'images/Philip/Philip_003_40.obj';
					scene.remove(o41);
					renderer.deallocateObject(o41);				
				}, 1900);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o42 = 'images/Philip/Philip_003_41.obj';
					// loader.load( o42 );					
				// }, 1900);
				
				// setTimeout(function() {				
					// var o42 = 'images/Philip/Philip_003_41.obj';
					// scene.remove(o42 );
					// renderer.deallocateObject( o42 );					
				// }, 1950);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o43 = 'images/Philip/Philip_003_42.obj';
					// loader.load( o43);					
				// }, 2000);
				
				// setTimeout(function() {				
					// var o43 = 'images/Philip/Philip_003_42.obj';
					// scene.remove(o43 );
					// renderer.deallocateObject( o43 );					
				// }, 2050);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o44 = 'images/Philip/Philip_003_43.obj';
					// loader.load( o44 );					
				// }, 2050);
				
				// setTimeout(function() {				
					// var o44 = 'images/Philip/Philip_003_43.obj';
					// scene.remove(o44 );
					// renderer.deallocateObject( o44 );					
				// }, 2100);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o45 = 'images/Philip/Philip_003_44.obj';
					// loader.load( o45 );					
				// }, 2100);
				
				// setTimeout(function() {				
					// var o45 = 'images/Philip/Philip_003_44.obj';
					// scene.remove(o45 );
					// renderer.deallocateObject( o45 );					
				// }, 2150);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o46 = 'images/Philip/Philip_003_45.obj';
					// loader.load( o46 );
				// }, 2150);
				
				// setTimeout(function() {
					// var o46 = 'images/Philip/Philip_003_45.obj';
					// scene.remove(o46 );
					// renderer.deallocateObject( o46 );				
				// }, 2200);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o47 = 'images/Philip/Philip_003_46.obj';
					// loader.load( o47 );					
				// }, 2200);
				
				// setTimeout(function() {
					// var o47 = 'images/Philip/Philip_003_46.obj';
					// scene.remove(o47 );
					// renderer.deallocateObject( o47 );					
				// }, 2250);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o48 = 'images/Philip/Philip_003_47.obj';
					// loader.load( o48 );
				// }, 2250);
				
				// setTimeout(function() {
					// var o48 = 'images/Philip/Philip_003_47.obj';
					// scene.remove(o48 );
					// renderer.deallocateObject( o48 );				
				// }, 2300);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o48 = 'images/Philip/Philip_003_48.obj';
					// loader.load( o48 );
				// }, 2300);
				
				// setTimeout(function() {
					// var o48 = 'images/Philip/Philip_003_48.obj';
					// scene.remove(o48 );
					// renderer.deallocateObject( o48 );				
				// }, 2350);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o50 = 'images/Philip/Philip_003_49.obj';
					// loader.load( o50 );
				// }, 2350);
				
				// setTimeout(function() {
					// var o50 = 'images/Philip/Philip_003_49.obj';
					// scene.remove(o50 );
					// renderer.deallocateObject( o50 );				
				// }, 2400);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});
					var o51 = 'images/Philip/Philip_003_50.obj';
					loader.load( o51 );
				}, 2400);
				
				setTimeout(function() {
					var o51 = 'images/Philip/Philip_003_50.obj';
					scene.remove(o51 );
					renderer.deallocateObject( o51 );				
				}, 2450);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o52 = 'images/Philip/Philip_003_51.obj';
					// loader.load( o52 );
				// }, 2450);
				
				// setTimeout(function() {
					// var o52 = 'images/Philip/Philip_003_51.obj';
					// scene.remove(o52 );
					// renderer.deallocateObject( o52 );				
				// }, 2500);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o53 = 'images/Philip/Philip_003_52.obj';
					// loader.load( o53 );
				// }, 2500);
				
				// setTimeout(function() {
					// var o53 = 'images/Philip/Philip_003_52.obj';
					// scene.remove(o53 );
					// renderer.deallocateObject( o53 );				
				// }, 2550);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o54 = 'images/Philip/Philip_003_53.obj';
					// loader.load( o54 );
				// }, 2550);
				
				// setTimeout(function() {
					// var o54 = 'images/Philip/Philip_003_53.obj';
					// scene.remove(o54 );
					// renderer.deallocateObject( o54 );				
				// }, 2600);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o55 = 'images/Philip/Philip_003_54.obj';
					// loader.load( o55 );
				// }, 2600);
				
				// setTimeout(function() {
					// var o55 = 'images/Philip/Philip_003_54.obj';
					// scene.remove(o55 );
					// renderer.deallocateObject( o55 );				
				// }, 2650);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o56 = 'images/Philip/Philip_003_55.obj';
					// loader.load( o56 );
				// }, 2650);
				
				// setTimeout(function() {
					// var o56 = 'images/Philip/Philip_003_55.obj';
					// scene.remove(o56);
					// renderer.deallocateObject( o56 );				
				// }, 2700);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o57 = 'images/Philip/Philip_003_56.obj';
					// loader.load( o57 );
				// }, 2700);
				
				// setTimeout(function() {
					// var o57 = 'images/Philip/Philip_003_56.obj';
					// scene.remove(o57 );
					// renderer.deallocateObject( o57 );				
				// }, 2750);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o58 = 'images/Philip/Philip_003_57.obj';
					// loader.load( o58 );
				// }, 2750);
				
				// setTimeout(function() {
					// var o58 = 'images/Philip/Philip_003_57.obj';
					// scene.remove(o58 );
					// renderer.deallocateObject( o58);				
				// }, 2800);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o59 = 'images/Philip/Philip_003_58.obj';
					// loader.load( o59 );
				// }, 2800);
				
				// setTimeout(function() {
					// var o59 = 'images/Philip/Philip_003_58.obj';
					// scene.remove(o59 );
					// renderer.deallocateObject( o59 );				
				// }, 2850);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o60 = 'images/Philip/Philip_003_59.obj';
					// loader.load( o60 );
				// }, 2850);
				
				// setTimeout(function() {
					// var o60 = 'images/Philip/Philip_003_59.obj';
					// scene.remove(o60 );
					// renderer.deallocateObject( o60 );				
				// }, 2900);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});
					var o61 = 'images/Philip/Philip_003_60.obj';
					loader.load( o61 );
				}, 2900);
				
				setTimeout(function() {
					var o61 = 'images/Philip/Philip_003_60.obj';
					scene.remove(o61)
					renderer.deallocateObject( o61 );					
				}, 2950);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o62 = 'images/Philip/Philip_003_61.obj';
					// loader.load( o62 );
				// }, 2950);
				
				// setTimeout(function() {
					// var o62 = 'images/Philip/Philip_003_61.obj';
					// scene.remove(o62 );
					// renderer.deallocateObject( o62 );				
				// }, 3000);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o63 = 'images/Philip/Philip_003_62.obj';
					// loader.load( o63 );
				// }, 3000);
				
				// setTimeout(function() {
					// var o63 = 'images/Philip/Philip_003_62.obj';
					// scene.remove(o63 );
					// renderer.deallocateObject( o63 );				
				// }, 3050);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o64 = 'images/Philip/Philip_003_63.obj';
					// loader.load( o64 );
				// }, 3050);
				
				// setTimeout(function() {
					// var o64 = 'images/Philip/Philip_003_63.obj';
					// scene.remove(o64 );
					// renderer.deallocateObject( o64 );				
				// }, 3100);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o65 = 'images/Philip/Philip_003_64.obj';
					// loader.load( o65 );
				// }, 3100);
				
				// setTimeout(function() {
					// var o65 = 'images/Philip/Philip_003_64.obj';
					// scene.remove(o65 );
					// renderer.deallocateObject( o65 );				
				// }, 3150);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o66 = 'images/Philip/Philip_003_65.obj';
					// loader.load( o66 );					
				// }, 3150);				
				
				// setTimeout(function() {	
					// var o66 = 'images/Philip/Philip_003_65.obj';
					// scene.remove(o66)
					// renderer.deallocateObject( o66 );						
				// }, 3200);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o67 = 'images/Philip/Philip_003_66.obj';
					// loader.load( o67 );					
				// }, 3200);				
				
				// setTimeout(function() {	
					// var o67 = 'images/Philip/Philip_003_66.obj';
					// scene.remove(o67)
					// renderer.deallocateObject( o67 );						
				// }, 3250);
								
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o68 = 'images/Philip/Philip_003_67.obj';
					// loader.load( o68 );					
				// }, 3250);				
				
				// setTimeout(function() {	
					// var o68 = 'images/Philip/Philip_003_67.obj';
					// scene.remove(o68)
					// renderer.deallocateObject( o68 );						
				// }, 3300);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o69 = 'images/Philip/Philip_003_68.obj';
					// loader.load( o69 );					
				// }, 3300);				
				
				// setTimeout(function() {	
					// var o69 = 'images/Philip/Philip_003_68.obj';
					// scene.remove(o69);
					// renderer.deallocateObject( o69 );						
				// }, 3350);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });					
					// var o70 = 'images/Philip/Philip_003_69.obj';
					// loader.load( o70 );					
				// }, 3350);				
				
				// setTimeout(function() {	
					// var o70 = 'images/Philip/Philip_003_69.obj';
					// scene.remove(o70)
					// renderer.deallocateObject( o70 );						
				// }, 3400);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});	
					var o71 = 'images/Philip/Philip_003_70.obj';
					loader.load( o71 );
				}, 3400);
				
				setTimeout(function() {
					var o71 = 'images/Philip/Philip_003_70.obj';
					scene.remove(o71);
					renderer.deallocateObject( o71 );				
				}, 3450);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o72 = 'images/Philip/Philip_003_71.obj';
					// loader.load( o72 );
				// }, 3450);
				
				// setTimeout(function() {
					// var o72 = 'images/Philip/Philip_003_71.obj';
					// scene.remove(o72);
					// renderer.deallocateObject( o72 );				
				// }, 3500);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o73 = 'images/Philip/Philip_003_72.obj';
					// loader.load( o73 );
				// }, 3500);
				
				// setTimeout(function() {
					// var o73= 'images/Philip/Philip_003_72.obj';
					// scene.remove(o73 );
					// renderer.deallocateObject( o73);				
				// }, 3550);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o74 = 'images/Philip/Philip_003_73.obj';
					// loader.load( o74 );
				// }, 3350);
				
				// setTimeout(function() {
					// var o74 = 'images/Philip/Philip_003_73.obj';
					// scene.remove(o74);
					// renderer.deallocateObject( o74 );				
				// }, 3600);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o75 = 'images/Philip/Philip_003_74.obj';
					// loader.load( o75 );
				// }, 3600);
				
				// setTimeout(function() {
					// var o75 = 'images/Philip/Philip_003_74.obj';
					// scene.remove(o75);
					// renderer.deallocateObject( o75);				
				// }, 3650);
				
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o76 = 'images/Philip/Philip_003_75.obj';
					// loader.load( o76 );
				// }, 3650);
				
				// setTimeout(function() {
					// var o76 = 'images/Philip/Philip_003_75.obj';
					// scene.remove(o76)
					// renderer.deallocateObject(o76);				
				// }, 3700);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o77 = 'images/Philip/Philip_003_76.obj';
					// loader.load( o77 );
				// }, 3700);
				
				// setTimeout(function() {
					// var o77 = 'images/Philip/Philip_003_76.obj';
					// scene.remove(o77);
					// renderer.deallocateObject( o77 );				
				// }, 3750);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o78 = 'images/Philip/Philip_003_77.obj';
					// loader.load( o78 );
				// }, 3750);
				
				// setTimeout(function() {
					// var o78 = 'images/Philip/Philip_003_77.obj';
					// scene.remove(o78);
					// renderer.deallocateObject( o78 );				
				// }, 3800);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o79 = 'images/Philip/Philip_003_78.obj';
					// loader.load( o79 );
				// }, 3800);
				
				// setTimeout(function() {
					// var o79 = 'images/Philip/Philip_003_78.obj';
					// scene.remove(o79);
					// renderer.deallocateObject( o79 );				
				// }, 3850);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });	
					// var o80 = 'images/Philip/Philip_003_79.obj';
					// loader.load( o80 );
				// }, 3850);
				
				// setTimeout(function() {
					// var o80 = 'images/Philip/Philip_003_79.obj';
					// scene.remove(o80);
					// renderer.deallocateObject( o80 );				
				// }, 3900);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});
					var o81 =  'images/Philip/Philip_003_80.obj' ;
					loader.load( o81 );
				}, 3900);
				
				setTimeout(function() {
					var o81 =  'images/Philip/Philip_003_80.obj';
					scene.remove(o81);
					renderer.deallocateObject( o81);				
				}, 3950);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o82 =  'images/Philip/Philip_003_81.obj' ;
					// loader.load( o82 );
				// }, 3950);
				
				// setTimeout(function() {
					// var o82 =  'images/Philip/Philip_003_81.obj';
					// scene.remove(o82);
					// renderer.deallocateObject( o82);				
				// }, 4000);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o83 =  'images/Philip/Philip_003_82.obj';
					// loader.load( o83 );
				// }, 4000);
				
				// setTimeout(function() {
					// var o83 =  'images/Philip/Philip_003_82.obj';
					// scene.remove(o83);
					// renderer.deallocateObject( o83);				
				// }, 4050);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o84 =  'images/Philip/Philip_003_83.obj' ;
					// loader.load( o84);
				// }, 4050);
				
				// setTimeout(function() {
					// var o84=  'images/Philip/Philip_003_83.obj';
					// scene.remove(o84);
					// renderer.deallocateObject( o84);
				// }, 4100);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o85 =  'images/Philip/Philip_003_84.obj' ;
					// loader.load( o85);
				// }, 4100);
				
				// setTimeout(function() {
					// var o85 =  'images/Philip/Philip_003_84.obj';
					// scene.remove(o85);
					// renderer.deallocateObject( o85);				
				// }, 4150);
				
				// setTimeout(function() {				
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });				
					// var o86 = 'images/Philip/Philip_003_85.obj';
					// loader.load( o86 );
				// }, 4150);
				
				// setTimeout(function() {
					// var o86 = 'images/Philip/Philip_003_85.obj';
					// scene.remove(o86 );
					// renderer.deallocateObject( o86 );					
				// }, 4200);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o87 =  'images/Philip/Philip_003_86.obj' ;
					// loader.load( o87 );
				// }, 4200);
				
				// setTimeout(function() {
					// var o87 =  'images/Philip/Philip_003_86.obj';
					// scene.remove(o87);
					// renderer.deallocateObject( o87);				
				// }, 4250);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o88=  'images/Philip/Philip_003_87.obj' ;
					// loader.load( o88 );
				// }, 4250);
				
				// setTimeout(function() {
					// var o88 =  'images/Philip/Philip_003_87.obj';
					// scene.remove(o88);
					// renderer.deallocateObject( o88);				
				// }, 4300);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o89 =  'images/Philip/Philip_003_88.obj' ;
					// loader.load( o89 );
				// }, 4300);
				
				// setTimeout(function() {
					// var o89 =  'images/Philip/Philip_003_88.obj';
					// scene.remove(o89);
					// renderer.deallocateObject( o89);				
				// }, 4350);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o90 =  'images/Philip/Philip_003_89.obj' ;
					// loader.load( o90 );
				// }, 4350);
				
				// setTimeout(function() {
					// var o90 =  'images/Philip/Philip_003_89.obj';
					// scene.remove(o90);
					// renderer.deallocateObject( o90);				
				// }, 4400);
				
				setTimeout(function() {
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );											
					});
					var o91 = 'images/Philip/Philip_003_90.obj';
					loader.load( o91 );
				}, 4400);
				
				setTimeout(function() {
					var o91 = 'images/Philip/Philip_003_90.obj';
					scene.remove(o91 );
					renderer.deallocateObject( o91 );				
				}, 4450);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o92 = 'images/Philip/Philip_003_91.obj';
					// loader.load( o92 );
				// }, 4450);
				
				// setTimeout(function() {
					// var o92 = 'images/Philip/Philip_003_91.obj';
					// scene.remove(o92 );
					// renderer.deallocateObject( o92 );				
				// }, 4600);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o92 = 'images/Philip/Philip_003_92.obj';
					// loader.load( o92 );
				// }, 4600);
				
				// setTimeout(function() {
					// var o92 = 'images/Philip/Philip_003_92.obj';
					// scene.remove(o92 );
					// renderer.deallocateObject( o92 );				
				// }, 4650);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o94 = 'images/Philip/Philip_003_93.obj';
					// loader.load( o94);
				// }, 4650);
				
				// setTimeout(function() {
					// var o94 = 'images/Philip/Philip_003_93.obj';
					// scene.remove(o94 );
					// renderer.deallocateObject( o94 );				
				// }, 4700);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o95 = 'images/Philip/Philip_003_94.obj';
					// loader.load( o95 );
				// }, 4700);
				
				// setTimeout(function() {
					// var o95 = 'images/Philip/Philip_003_94.obj';
					// scene.remove(o95 );
					// renderer.deallocateObject( o95 );				
				// }, 4750);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o96 = 'images/Philip/Philip_003_95.obj';
					// loader.load( o96 );
				// }, 4750);
				
				// setTimeout(function() {
					// var o96 = 'images/Philip/Philip_003_95.obj';
					// scene.remove(o96);
					// renderer.deallocateObject( o96 );				
				// }, 4800);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o97 = 'images/Philip/Philip_003_96.obj';
					// loader.load( o97 );
				// }, 4800);
				
				// setTimeout(function() {
					// var o97 = 'images/Philip/Philip_003_96.obj';
					// scene.remove(o97 );
					// renderer.deallocateObject( o97 );				
				// }, 4850);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o98 = 'images/Philip/Philip_003_97.obj';
					// loader.load( o98 );
				// }, 4850);
				
				// setTimeout(function() {
					// var o98 = 'images/Philip/Philip_003_97.obj';
					// scene.remove(o98 );
					// renderer.deallocateObject( o98 );				
				// }, 4900);
				
				// setTimeout(function() {
					// var loader = new THREE.OBJLoader();				
					// loader.addEventListener( 'load', function ( event ) {					
						// var object = event.content;				
						// for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							// object.children[ i ].material.map = texture;
						// }
						// object.position.y = 50;					
						// scene.add( object );											
					// });
					// var o99 = 'images/Philip/Philip_003_98.obj';
					// loader.load( o99 );
				// }, 4900);
				
				// setTimeout(function() {
					// var o99 = 'images/Philip/Philip_003_98.obj';
					// scene.remove(o99 );
					// renderer.deallocateObject( o99 );				
				// }, 4950);
				
				setTimeout(function() {					
					var loader = new THREE.OBJLoader();				
					loader.addEventListener( 'load', function ( event ) {					
						var object = event.content;				
						for ( var i = 0, l = object.children.length; i < l; i ++ ) {
							object.children[ i ].material.map = texture;
						}
						object.position.y = 50;					
						scene.add( object );	
						setTimeout(function() { scene.remove( object ); },8000);	
					});				
					var o100 = 'images/Philip/Philip_003_99.obj';
					loader.load( o100 );					
				}, 5000);
				
				setTimeout(function() {				
					var o100 = 'images/Philip/Philip_003_99.obj';
					scene.remove(o100 );
					renderer.deallocateObject( o100 );					
				}, 4500);

				if ("WebGLRenderingContext" in window)
					renderer = new THREE.WebGLRenderer();
					else
					renderer = new THREE.CanvasRenderer();
					renderer.autoClear = false;
					
					renderer.setSize( width, height );
					
					container.appendChild( renderer.domElement );
					
					var elem = document.getElementById ("webgl");
					
					elem.addEventListener( 'mousemove', onDocumentMouseMove, false );
					
					//document.addEventListener( 'mousewheel', onRendererScroll, false);				
					
					if (elem.addEventListener) {    // all browsers except IE before version 9
						// Internet Explorer, Opera, Google Chrome and Safari
						elem.addEventListener ("mousewheel", onRendererScroll, false);
						// Firefox
						elem.addEventListener ("DOMMouseScroll", onRendererScroll, false);
					}
				
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
					 if (event.wheelDelta) {
                rolled = -10 * event.wheelDelta;
					}
					else {  // Firefox
							// The measurement units of the detail and wheelDelta properties are different.
						rolled = -10 * event.detail;
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
				var time;				
							
				function animate( time ) {
				
					animationStartTime = Date.now();
					frame = requestAnimationFrame( animate );
					render();
					var buttons = document.getElementById("start");
					buttons.style.backgroundColor = "yellow";
					var buttonp = document.getElementById("pause");
					buttonp.style.backgroundColor = "whiteSmoke";
					
				}
				
				function render() {	

					camera.position.x += ( mouseX - camera.position.x ) * .1;
					camera.position.y += ( - mouseY - camera.position.y ) * .1;

					camera.lookAt( scene.position );
					
					renderer.clear();
					
					renderer.render( scene, camera );
					
				}
							
				function pause() {
					
					if ( frame ) {
						cancelAnimationFrame( frame );
						window.webkitCancelAnimationFrame( frame );	
						var buttonp = document.getElementById("pause");
						buttonp.style.backgroundColor = "yellow";
						var buttons = document.getElementById("start");
						buttons.style.backgroundColor = "whiteSmoke";
						}
						else {
							cancelAnimationFrame( frame );
							window.webkitCancelAnimationFrame( frame );
							}				
				}
				
				function rewind() {	
					
					time = clock.getElapsedTime();	
					delta = clock.getDelta();
					if ( time > 0 ) {						
						time -= delta;
						requestAnimationFrame( animate );			
									
					}								
					
				}					

				function onKeyDown(event) {
				
					var keyCode = event.keyCode;
					
					switch(keyCode) {
					
						case 80:
							pause();
						break;
						
						case 83:
							animate();
						break;
												
						default:
						break;
					}
					
				}	
					
				
	
	