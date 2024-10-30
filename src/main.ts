import './style.css'
import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.x = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

//meshes
//floor
const floorGeo = new THREE.BoxGeometry(100, 0.2, 100);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x00ccff });
const floorMesh = new THREE.Mesh(floorGeo, floorMat);
scene.add(floorMesh);

//lights

const ambientLight = new THREE.AmbientLight(0xefefef, 0.75);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}


animate()

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);