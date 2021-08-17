import { Gameobject } from "./GameObject.js";
export class monster extends Gameobject {
    constructor(tagName, gs) {
        super(tagName, gs.getDiv());
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        super.update();
        this.x -= 3;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
    }
}
//# sourceMappingURL=monster.js.map