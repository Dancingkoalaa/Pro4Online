export class Gameobject {
    protected x : number;
    protected y : number;
    protected div : HTMLElement;

    constructor(tagName: string, parent: HTMLElement) {
        this.create(tagName, parent);
    }

    public getBoundingRect() {
        return this.div.getBoundingClientRect();
    }

    public create(tagName: string, parent: HTMLElement) {
        this.div = document.createElement(tagName);
        parent.appendChild(this.div);
    }

    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public remove(): void
    {
        this.div.remove();
    }
}