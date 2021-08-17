import { StandardScreen } from "./standardScreen.js";
export class Startscreen extends StandardScreen {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const btn = document.createElement("button");
        const text = document.createElement("GameElement");
        this.div.appendChild(btn);
        this.div.appendChild(text);
        btn.innerText = "START GAME";
        text.innerText = "Gebruik de pijlen om Hunter te bewegen! Scoor 30 punten voordat Slimer je pakt!";
        btn.addEventListener("click", () => this.startGame());
    }
    startGame() {
        this.destroyScreen();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=Startscreen.js.map