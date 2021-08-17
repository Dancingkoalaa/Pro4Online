import { hunter } from "./hunter.js";
import { Ghost } from "./ghost.js";
import { monster } from "./monster.js";
import { StandardScreen } from "./standardScreen.js";
export class Gamescreen extends StandardScreen {
    constructor(game) {
        super('gamescreen');
        this.ghosts = [];
        this.monsters = 0;
        this.score = 0;
        this.text = document.createElement("div");
        this.div.appendChild(this.text);
        this.game = game;
        for (let i = 0; i < 10; i++) {
            this.ghosts.push(new Ghost("ghost", this));
        }
        this.hunter = new hunter("hunter", this);
    }
    update() {
        for (const ghost of this.ghosts) {
            ghost.update();
        }
        this.checkCollionGhost();
        this.hunter.update();
        if (this.monster) {
            this.monster.update();
            this.checkDeathHunter();
        }
        if (this.score == 10 && this.monsters == 0) {
            this.monster = new monster("monster", this);
            this.monsters++;
        }
        else if (this.score == 30) {
            this.destroyScreen();
            this.game.showWinScreen(this.score);
        }
        this.text.innerText = `SCORE: ${this.score}`;
    }
    checkDeathHunter() {
        if (this.checkCollision(this.monster.getBoundingRect(), this.hunter.getBoundingRect())) {
            this.destroyScreen();
            this.game.showLoseScreen(this.score);
        }
    }
    checkCollionGhost() {
        for (let ghost of this.ghosts) {
            if (this.checkCollision(ghost.getBoundingRect(), this.hunter.getBoundingRect())) {
                this.removeGhost(ghost);
            }
        }
    }
    removeGhost(ghost) {
        ghost.remove();
        this.ghosts = this.ghosts.filter(e => e != ghost);
        this.ghosts.push(new Ghost("ghost", this));
        this.score++;
        console.log(this.score);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gamescreen.js.map