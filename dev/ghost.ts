import { Gamescreen } from './gameScreen.js';
import { Gameobject } from './GameObject.js';

export class Ghost extends Gameobject {

    private screen: Gamescreen

    constructor(tagName: string, gs: Gamescreen)  {
        super(tagName, gs.getDiv());
        
        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() : void {
        super.update();
        // Check if the object is completely outside the screen (left side)
        if(this.x + this.div.clientWidth < 0) {
            // Place the object on the right side outside the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        }
    }

}