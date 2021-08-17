import { Gameobject } from './GameObject.js';
export class hunter extends Gameobject {
    constructor(tagName, gs) {
        super(tagName, gs.getDiv());
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        console.log("hunter was created!");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        super.update();
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        if (this.y < 0) {
            this.y = 0;
        }
        else if (this.y > window.innerHeight - this.div.clientHeight) {
            this.y = window.innerHeight - this.div.clientHeight;
        }
        else if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x > window.innerWidth - this.div.clientWidth) {
            this.x = window.innerWidth - this.div.clientWidth;
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            default:
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
        else if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=hunter.js.map