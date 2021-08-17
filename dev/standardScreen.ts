// basis voor alle screens
export class StandardScreen {

    protected x = 0;
    protected y = 0;

    protected div : HTMLElement;

    constructor(tagName: string) {
        this.create(tagName);
    }

    public create(tagName: string) {
        const gameDiv = document.querySelector('game') as HTMLElement;
        this.div = document.createElement(tagName);
        gameDiv.appendChild(this.div);
    }

    public destroyScreen() {
        this.div.remove();
    }
    
    public update() {

    }

    public getDiv(): HTMLElement {
        return this.div
    }

}