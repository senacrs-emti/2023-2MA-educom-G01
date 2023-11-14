import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEnconding = THREE.sRGBEncoding;

const scene = new THREE.Scene();


var model = 'earth2.glb';


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0,0,5)

const loader = new GLTFLoader();
loader.load(model, function(gltf) {scene.add(gltf.scene);});

const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 15);
scene.add (ambientLight);

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera);
}

animate()


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.onmouseup = function() {
    if(slider.value == 10){
        scene.remove(loader);
        model='POLY.glb';
        loader.load(model, function(gltf) {scene.add(gltf.scene);});
        console.log(model);
    }
  }

  mouseUp()
