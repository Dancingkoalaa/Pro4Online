import { Gameobject } from './GameObject.js';
export class Ghost extends Gameobject {
    constructor(tagName, gs) {
        super(tagName, gs.getDiv());
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        super.update();
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
    }
}
//# sourceMappingURL=ghost.js.map