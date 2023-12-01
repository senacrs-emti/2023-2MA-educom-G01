import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEnconding = THREE.sRGBEncoding;


const scene = new THREE.Scene();

var world_image = './images/08_Today.jpg';

const space = new THREE.TextureLoader().load( './space.png' );
const texture = new THREE.TextureLoader().load(world_image); 
texture.encoding = THREE.sRGBEncoding;
space.encoding = THREE.sRGBEncoding;


scene.background = space;

var geometry = new THREE.SphereGeometry(1.2, 36, 15);
var material = new THREE.MeshBasicMaterial({ map:texture });

const world = new THREE.Mesh(geometry, material);
 scene.add(world);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0,2,5);



const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;


function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera);
}

animate()


var slider = document.getElementById("myRange");


let world1;
let world2;
let world3;
let world4;
let world5;
let world6;
let world7;
let world8;

slider.onmouseup = function() {
      if(slider.value >= 1 && slider.value <= 10){
        scene.remove(world);
        world_image = './images/01_Hadean.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        world1 = new THREE.Mesh(geometry, material);
        scene.add(world1);
      }
      if(slider.value >= 11 && slider.value <= 20){
        scene.remove(world1);
        world_image = './images/02_Archean.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world2 = new THREE.Mesh(geometry, material);
        scene.add(world2);
      }
      if(slider.value >= 21 && slider.value <= 30){
        scene.remove(world2);
        world_image = './images/03_Rodinia.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world3 = new THREE.Mesh(geometry, material);
        scene.add(world3);
      }
      if(slider.value >= 31 && slider.value <= 40){
        scene.remove(world3);
        world_image = './images/04_Snow.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world4 = new THREE.Mesh(geometry, material);
        scene.add(world4);
      }
      if(slider.value >= 41 && slider.value <= 50){
        scene.remove(world4);
        world_image = './images/05_Cambrian.jpg';
        const texture = new THREE.TextureLoader().load(world_image);
        texture.encoding = THREE.sRGBEncoding; 
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world5 = new THREE.Mesh(geometry, material);
        scene.add(world5);
      }
      if(slider.value >= 51 && slider.value <= 60){
        scene.remove(world5);
        world_image = './images/06_Jurassic.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world6 = new THREE.Mesh(geometry, material);
        scene.add(world6);
      }
      if(slider.value >= 61 && slider.value <= 70){
        scene.remove(world6);
        world_image = './images/07_Pleistocene.jpg';
        const texture = new THREE.TextureLoader().load(world_image); 
        texture.encoding = THREE.sRGBEncoding;
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world7 = new THREE.Mesh(geometry, material);
        scene.add(world7);
      }
      if(slider.value >= 71 && slider.value <= 80){
        scene.remove(world7);
        world_image = './images/08_Today.jpg';
        const texture = new THREE.TextureLoader().load(world_image);
        texture.encoding = THREE.sRGBEncoding; 
        var material = new THREE.MeshBasicMaterial({ map:texture });
        const world8 = new THREE.Mesh(geometry, material);
        scene.add(world8);
      }
  }

