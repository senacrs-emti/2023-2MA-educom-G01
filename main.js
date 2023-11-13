import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEnconding = THREE.sRGBEncoding;

const scene = new THREE.Scene();




const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0,0,5)

var loader = new THREE.Loader(); // Whichever ThreeJS loader you are using
var modelPaths = ['./earth2.glb', './POLY.gbl']; // Array to store all model paths
var currentPathIndex = 0; // index in the path array of the currently showing model
var currentModel; // stores the model that is currently displaying
loadModel(currentPathIndex);

function loadModel(index){
	if(currentModel){
		scene.remove(currentModel); //remove the current model
	}

	loader.load(modelPaths[index], (result) => {
		currentModel = result;
		scene.add(result);
	} );
}

function next(){
  currentPathIndex ++;
  loadModel(currentPathIndex);
}

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

function checkmodel(){
    if(slider.value ==  50){
        model = 'earth2.glb';

    } else {
        model = '';
    }
}

 const check = setInterval(checkmodel, 1);

    if(slider.value = 60){
        console.log(1);
    }