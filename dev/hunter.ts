import { Gamescreen } from './gameScreen.js';
import { Gameobject } from './GameObject.js';

export class hunter extends Gameobject {
    private verticalSpeed : number = 0
    private horizontalSpeed : number = 0
    private screen : Gamescreen;

    constructor(tagName: string, gs: Gamescreen) {
        super(tagName, gs.getDiv());
        console.log("hunter was created!")

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))
        
        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() : void {
        // Draw the hunter on the right coordinate (x, y)
        super.update();
        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;

        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > window.innerHeight - this.div.clientHeight) {
            this.y = window.innerHeight - this.div.clientHeight;
        } else if (this.x < 0) {
            this.x = 0;
        } else if (this.x > window.innerWidth - this.div.clientWidth) {
            this.x = window.innerWidth - this.div.clientWidth;
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        // console.log(e.key)

        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "ArrowUp" key is pressed
            case "ArrowUp":
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                break
            // When the "ArrowDown" key is pressed
            case "ArrowDown":
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break
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

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        } else if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.horizontalSpeed = 0;
        }
    }
}