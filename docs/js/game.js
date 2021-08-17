import { Startscreen } from "./Startscreen.js";
import { Gamescreen } from "./gamescreen.js";
import { WinScreen } from "./winScreen.js";
import { LoseScreen } from "./loseScreen.js";
export class Game {
    constructor() {
        this.showTitleScreen();
        this.gameLoop();
    }
    showTitleScreen() {
        this.screen = new Startscreen(this);
    }
    showGameScreen() {
        this.screen = new Gamescreen(this);
    }
    showWinScreen(endScore) {
        this.screen = new WinScreen(this, endScore);
    }
    showLoseScreen(endScore) {
        this.screen = new LoseScreen(this, endScore);
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map