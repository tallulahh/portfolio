const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("webgl");
canvas.width = innerWidth;
canvas.height = innerHeight;


let scene, camera, renderer, controls, sphere;

function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#09143c");
  scene.receiveShadow = true;
  camera = new THREE.PerspectiveCamera(
  75,
  canvas.width / canvas.height,
  0.1,
  1000
);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.autoRotate = false;
  controls.enabled = false;

  var light = new THREE.DirectionalLight("#f046e4", 1.2);
  light.position.set(100, 70, 100);
  light.castShadow = true;
  scene.add(light);

  //PLANE
  const planeGeometry = new THREE.PlaneGeometry( 100, 100, 200, 200 );
const planeMaterial = new THREE.MeshPhongMaterial( {color: "#09143c", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
  plane.receiveShadow = true;
  plane.position.set(0, 0, -3);
  scene.add( plane );

  const color1 = new THREE.Color("#f046e4");
  var sphereGeometry = new THREE.SphereGeometry(1, 128, 128);
  var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphereMaterial.needsUpdate = true;
  sphere.castShadow = true;
  scene.add(sphere);

  if (innerWidth < 550){
    sphere.position.set(1.5,-2,0);
    camera.position.z = 6;
  } else {
    sphere.position.set(3,0,0);
    camera.position.z = 5;
  }
}

function onWindowResize(){
  if (innerWidth < 550){
    sphere.position.set(1.5,-2,0);
    camera.position.z = 6;
  } else {
    sphere.position.set(3,0,0);
    camera.position.z = 5;
  }
  if (innerHeight != innerHeight){
    console.log("dont resize");
  } else {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

}

function update(){

  var time = performance.now() * 0.001;
  for (var i=0; i < sphere.geometry.vertices.length; i++){
    var p = sphere.geometry.vertices[i];
    p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x + time, p.y, p.z));
  }
  sphere.geometry.verticesNeedUpdate = true;
  sphere.geometry.computeVertexNormals();
  sphere.geometry.normalsNeedUpdate = true;
}

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize);
window.addEventListener('scroll', onWindowResize);

init();
animate();
