import * as THREE from "three";

export default class Player {
    jumpStrength: number;
    moveSpeed: number;
    playerGeo: THREE.BoxGeometry;
    playerMat: THREE.MeshStandardMaterial;
    playerMesh: THREE.Mesh; // Ensure this is declared
    velocity: number = 0;
    isJumping: boolean = false;
    gravity: number = -0.05;
    constructor(jumpStrength: number, moveSpeed: number) {
        this.jumpStrength = jumpStrength;
        this.moveSpeed = moveSpeed;
        this.playerGeo = new THREE.BoxGeometry(1, 2, 1);
        this.playerMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        this.playerMesh = new THREE.Mesh(this.playerGeo, this.playerMat);

        this.playerMesh.position.set(10, 0, -5);
    }

    move(e: KeyboardEvent) {
        if (e.code === "Space" && !this.isJumping) {
            this.isJumping = true;
            this.velocity = this.jumpStrength;
        }
        if (e.key === "w" || e.key === "W") {
            this.playerMesh.position.x -= this.moveSpeed;
        }
        if (e.key === "s" || e.key === "S") {
            this.playerMesh.position.x += this.moveSpeed;
        }
        if (e.key === "a" || e.key === "a") {
            this.playerMesh.position.z += this.moveSpeed;
        }
        if (e.key === "d" || e.key === "D") {
            this.playerMesh.position.z -= this.moveSpeed;
        }
    }

    jumpingUpdate() {
        if (this.isJumping) {
            this.playerMesh.position.y += this.velocity;
            this.velocity += this.gravity;

            if (this.playerMesh.position.y <= 0) {
                this.playerMesh.position.y = 0;
                this.isJumping = false;
                this.velocity = 0;
            }
        } else {
        }
    }
}