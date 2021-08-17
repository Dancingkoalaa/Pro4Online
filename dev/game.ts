import { Startscreen } from "./Startscreen.js";
import { Gamescreen } from "./gamescreen.js";
import { WinScreen } from "./winScreen.js";
import { LoseScreen } from "./loseScreen.js";
import { StandardScreen } from "./standardScreen.js";

export class Game {
    private screen: StandardScreen;

    constructor() {
        this.showTitleScreen();
        this.gameLoop();
    }

    public showTitleScreen() {
        this.screen = new Startscreen(this);
    }

    public showGameScreen() {
        this.screen = new Gamescreen(this);
    }

    public showWinScreen(endScore: number) {
        this.screen = new WinScreen(this, endScore);
    }

    public showLoseScreen(endScore: number) {
        this.screen = new LoseScreen(this, endScore);
    }

    private gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()