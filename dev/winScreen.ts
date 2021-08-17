import { Game } from "./game.js";
import { StandardScreen } from "./standardScreen.js";

export class WinScreen extends StandardScreen {
    private game: Game;

    constructor(game:Game, endScore: number) {
        super("startscreen")
        
        this.game = game;

        const btn = document.createElement("button")
        const text = document.createElement("GameElement")

        this.div.appendChild(btn)
        this.div.appendChild(text)

        btn.innerText = "Play Again!"
        text.innerText = `You've won, END SCORE: ${endScore}`
        
        btn.addEventListener("click", () => this.startGame())
    }

    private startGame()
    {
        this.destroyScreen();
        this.game.showGameScreen();
    }

}