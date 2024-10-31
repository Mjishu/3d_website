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
        this.playerGeo = new THREE.BoxGeometry(1, 1, 1);
        this.playerMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        this.playerMesh = new THREE.Mesh(this.playerGeo, this.playerMat);

        this.playerMesh.position.set(-10, 1, -5);
    }

    move(e: KeyboardEvent) {
        if (e.code === "Space") {
            console.log("Is jumping!")
        }
        if (e.key === "w" || e.key === "W") {
            console.log("moving forward");
        }
        if (e.key === "s" || e.key === "S") {
            console.log("moving backwards");
        }
    }

    jumpingUpdate() {
        if (this.isJumping) {
            this.playerMesh.position.y += this.velocity;
            this.velocity += this.gravity;

            if (this.playerMesh.position.y < 1) {
                this.playerMesh.position.y = 1;
                this.isJumping = false;
                this.velocity = 0;
            }
        }
    }
}