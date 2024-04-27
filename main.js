import * as THREE from 'three';

const scene = new THREE.Scene();
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "pink" }); // Use MeshBasicMaterial for basic color
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,30)
camera.position.z = 5
const canvas = document.querySelector('canvas.threejs')
const render = new THREE.WebGLRenderer({canvas:canvas})

render.setSize(1000,500)
render.render(scene,camera)

console.log(window)
function animate() {
	requestAnimationFrame( animate );

	cubeMesh.rotation.x += 0.01;
	cubeMesh.rotation.y += 0.01;

	render.render( scene, camera );
}

animate();
