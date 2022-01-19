import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';
 
var scene, camera, renderer, controls;
 
function init() {


  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
 
  const canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(0, 0, 0);
  var material = new THREE.MeshBasicMaterial({color: '#f00'});
  var box = new THREE.Mesh(geometry, material);
  scene.add(box);
  box.position.y = 9;
  
 
  camera.position.z = 13;
  
 
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(box.position);
 
 
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2;
 
  controls.enableDamping = true;

  window.requestAnimationFrame(animate);

  var loader = new GLTFLoader();
      var obj;
      loader.load("scene.gltf",function(gltf){
        obj = gltf.scene;
        scene.add(gltf.scene);
      });
      scene.background = new THREE.Color(0xffffff);
      var light = new THREE.HemisphereLight(0xffffff, 0x000000, 3);
      scene.add(light);


}
 
function animate() {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
 
function onWindowResize() {
 
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
 
  renderer.setSize( window.innerWidth, window.innerHeight );
 
}


 
 
window.addEventListener('resize', onWindowResize);
 
window.onload = init;