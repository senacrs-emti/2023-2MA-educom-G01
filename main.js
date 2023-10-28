import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEnconding = THREE.sRGBEncoding;

const scene = new THREE.Scene();

var img = new Image();
img.onload = function () {
	scene.background = new THREE.TextureLoader().load(img.src);
	
};
img.src = "space.png";

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0,0,5)

const loader = new GLTFLoader();
loader.load('earth2.glb', function(gltf) {scene.add(gltf.scene);})

const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableZoom = false;

const light1 = new THREE.PointLight(0xffffff, 20, 100);
light1.position.set( 50,30, 50);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 10, 100);
light2.position.set( -50,30, 50);
scene.add(light2);

const light3 = new THREE.PointLight(0xffffff, 2, 100);
light3.position.set( 0,30, -5);
scene.add(light3);

const ambientLight = new THREE.AmbientLight(0xffffff, 15);
scene.add (ambientLight);

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera);
}

animate()