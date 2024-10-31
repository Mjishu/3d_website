import * as THREE from "three";
import * as tp from "./types";
import { scene } from "./main"

export function createPlatform(pos: tp.pos, size: tp.pos, color: number) {
    const platformGeo = new THREE.BoxGeometry(size.x, size.y, size.z);
    const platformMat = new THREE.MeshStandardMaterial({ color: color });
    const platformMesh = new THREE.Mesh(platformGeo, platformMat);
    platformMesh.position.set(pos.x, pos.y, pos.z);
    platformMesh.castShadow = true;
    platformMesh.receiveShadow = true;
    scene.add(platformMesh)
}

export function createTrees(pos: tp.pos, height: number) {
    const trunkGeo = new THREE.CylinderGeometry(0.5, 0.5, height, 20);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x946b00 });
    const trunkMesh = new THREE.Mesh(trunkGeo, trunkMat);
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    trunkMesh.position.set(pos.x, pos.y, pos.z);
    scene.add(trunkMesh);

    const leavesGeo = new THREE.ConeGeometry(2, height, 32);
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
    const leavesMesh = new THREE.Mesh(leavesGeo, leavesMat);
    leavesMesh.position.set(0, 2, 0);
    leavesMesh.castShadow = true;
    leavesMesh.receiveShadow = true;
    trunkMesh.add(leavesMesh);
}