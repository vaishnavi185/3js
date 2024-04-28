import * as THREE from 'three'; //importing all lib from three as THREE
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Adjust path to OrbitControls

const scene = new THREE.Scene(); //creating scene first step
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); //defining geometry of figure 3 step
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" }); // defining material like color 3 step
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial); //creating a mesh with two object geometry and material second step

scene.add(cubeMesh); // adding mesh to scene step 4

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30); //adding camera to view result step 5
camera.position.z = 6; // setting camera position

//initialozing render for result step 6
//here canvas is tag in html
const canvas = document.querySelector('canvas.threejs');  
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(1000, 500); // specifying size of result 

 //intializing orbital controlls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
// controls.enableKeys = true;
// controls.keys = {
//     LEFT: 37, //left arrow
//     UP: 38, // up arrow
//     RIGHT: 39, // right arrow
//     BOTTOM: 40 // down arrow
// };

// document.addEventListener('keydown', (event) => {
//     console.log('Key pressed:', event.key);
// });

//initialze renderer loop so that each frome can initilize and can be seen on screen
const rendererloop = () => {
    controls.update(); // Update controls
    renderer.render(scene, camera); // Render scene
    requestAnimationFrame(rendererloop); // Request next frame
};

rendererloop();



