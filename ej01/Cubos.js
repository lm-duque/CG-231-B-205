       var WIDTH = window.innerWidth;
       var HEIGHT = window.innerHeight;

       var renderer = new THREE.WebGLRenderer({ antialias: true });
       renderer.setSize(WIDTH, HEIGHT);
       renderer.setClearColor(0xDDDDDD, 1);
       document.body.appendChild(renderer.domElement);

       var scene = new THREE.Scene();

       var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
       camera.position.z = 4.5;
       camera.position.x = -1.2;
       camera.position.y = 2;

       camera.rotation.set(0, -0.5, 0);
       scene.add(camera);

       var controls = new THREE.OrbitControls(camera, renderer.domElement);

       const lado = 1; 

       // * Cubo 1 *
       // BoxGeometry (hacer la geometria)
       var geometry1 = new THREE.BoxGeometry( lado,lado,lado);
       // Material aplicar al cubo (green)
       //var material = new THREE.MeshNormalMaterial();
       var material1 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
       // Aplicar material para BoxGeometry
       var cube1 = new THREE.Mesh( geometry1, material1 );


       // * Cubo 2 *
       // BoxGeometry (hacer la geometria)
       var geometry2 = new THREE.BoxGeometry( lado,lado,lado );
       // Material aplicar al cubo (green)
       //var material2 = new THREE.MeshNormalMaterial();
       var material2 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
       // Aplicar material para BoxGeometry
       var cube2 = new THREE.Mesh( geometry2, material2 );


       // * Cubo 3*
       // BoxGeometry (hacer la geometria)
       var geometry3 = new THREE.BoxGeometry( lado,lado,lado );
       // Material aplicar al cubo (green)
       //var material = new THREE.MeshNormalMaterial();
       var material3 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
       // Aplicar material para BoxGeometry
       var cube3 = new THREE.Mesh( geometry3, material3 );



       document.addEventListener('keydown', function (event) {
       switch (event.keyCode) {

              case 13: // crear
              scene.add( cube1 );
              scene.add( cube2 );
              scene.add( cube3 );
              break;

              case 96: // Escalar 2
              geometry2.scale(1/2, 1/2, 1/2);
              break;
              case 97: // Escalar 3
              geometry3.scale(1/4, 1/4, 1/4 );
              break;
              case 98: // Transladar
              geometry1.translate(lado/2,lado/2,lado/2 );
              break;
              case 99: // Transladar
              geometry2.translate(lado/2,lado + lado/4,lado/2 );
              break;
              case 100: // Transladar
              geometry3.translate(lado/2 ,lado + lado/2 + lado/8, lado/2 );
              break;
              case 46: // Borrar
              this.location.reload();
              break
       }
       });



       const light = new THREE.DirectionalLight(0xffffff, 1);
       light.position.set(-1, 2, 4);
       scene.add(light);

       const size = 150;
       const divisions = 160;
       const axesHelper = new THREE.AxesHelper(1000);
       scene.add(axesHelper);

       const gridHelper = new THREE.GridHelper(size, divisions);
       scene.add(gridHelper);

       var arrowSize = 2; // Tamaño flecha eje
       var origin = new THREE.Vector3(0, 0, 0); // Definir origen
       var x = new THREE.Vector3(1, 0, 0); // vector unitario en X
       var y = new THREE.Vector3(0, 1, 0); // Vector unitario en Y
       var z = new THREE.Vector3(0, 0, 1); // Vector unitario en Z
       var colorR = new THREE.Color(0xAA0000); // Color Rojo - Red
       var colorG = new THREE.Color(0x00AA00); // Color Verde - Green
       var colorB = new THREE.Color(0x0000AA); // Color Azul -Blue

       // Ejes X, Y, Z
       var arrowX = new THREE.ArrowHelper(x, origin, arrowSize, colorR); // Creación flecha en eje X
       var arrowY = new THREE.ArrowHelper(y, origin, arrowSize, colorG); // Creación flecha en eje Y
       var arrowZ = new THREE.ArrowHelper(z, origin, arrowSize, colorB); // Creación flecha en eje Z

       scene.add(arrowX); // Agregar flecha eje X
       scene.add(arrowY); // Agregar flecha eje Y
       scene.add(arrowZ); // Agregar flecha eje Z


       function render() {
       requestAnimationFrame(render);
       renderer.render(scene, camera);
       }

       render();