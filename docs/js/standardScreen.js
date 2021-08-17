export class StandardScreen {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        this.create(tagName);
    }
    create(tagName) {
        const gameDiv = document.querySelector('game');
        this.div = document.createElement(tagName);
        gameDiv.appendChild(this.div);
    }
    destroyScreen() {
        this.div.remove();
    }
    update() {
    }
    getDiv() {
        return this.div;
    }
}
//# sourceMappingURL=standardScreen.js.map