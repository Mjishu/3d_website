import './style.css'
import * as THREE from "three";
import * as tp from "./types.ts";
import * as props from "./props.ts";
import Player from './player.ts';

const player = new Player(0.5, 0.5);
const w = window.innerWidth;
const h = window.innerHeight;

export const scene = new THREE.Scene();

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(15, 15, -9.5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

scene.add(player.playerMesh)

//meshes
//floor
const floorGeo = new THREE.BoxGeometry(100, 0.2, 100);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x00ccff });
const floorMesh = new THREE.Mesh(floorGeo, floorMat);
floorMesh.receiveShadow = true;
floorMesh.position.y = -0.6;
scene.add(floorMesh);

//Platforms
props.createPlatform({ x: 0, y: 0, z: 0 }, { x: 2.5, y: 1, z: 10 }, 0xf3f5ba);
props.createPlatform({ x: -4.5, y: 0, z: 0 }, { x: 6, y: 2.5, z: 12 }, 0xf3f5ba);
props.createPlatform({ x: -9.5, y: 0, z: 3.5 }, { x: 7, y: 4, z: 20 }, 0xf3f5ba);

//Trees(pos,height)
props.createTrees({ x: 5, y: 2, z: 10 }, 5);
props.createTrees({ x: -5, y: 2, z: -10 }, 5);
props.createTrees({ x: -10, y: 3, z: 20 }, 7);

//lights

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 20, 10);
directionalLight.castShadow = true; // Enable shadow casting for the directional light
directionalLight.shadow.mapSize.width = 1024; // Optional: Increase shadow quality
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5; // Optional: Adjust near and far planes
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0xFFFFFF, 0.6);
scene.add(hemisphereLight);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  player.jumpingUpdate();
}


animate()

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);