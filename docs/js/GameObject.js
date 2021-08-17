export class Gameobject {
    constructor(tagName, parent) {
        this.create(tagName, parent);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    create(tagName, parent) {
        this.div = document.createElement(tagName);
        parent.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=GameObject.js.map