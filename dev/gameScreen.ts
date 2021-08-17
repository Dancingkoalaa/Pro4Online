import { hunter } from "./hunter.js"
import { Game } from "./game.js"
import { Ghost } from "./ghost.js"
import { monster } from "./monster.js"
import { StandardScreen } from "./standardScreen.js"

export class Gamescreen extends StandardScreen {
      
    private ghosts : Ghost[] = []
    private hunter : hunter
    private monster : monster
    private monsters : number = 0
    public score : number = 0
    private text : HTMLElement
    private game : Game;
    
    constructor(game: Game) {    
        super('gamescreen');
        // console.log("Game was created!")
        this.text = document.createElement("div")
        this.div.appendChild(this.text);
        this.game = game;
        
        // Create the object
        for (let i = 0; i < 10; i++) {
            this.ghosts.push(new Ghost("ghost", this))
        }
        

        // Create the hunter
        this.hunter = new hunter("hunter", this)
        
    }

    public update() {
        
        // update the object
        for (const ghost of this.ghosts) {
            ghost.update()
        }

        this.checkCollionGhost()

        
        // update the hunter
        this.hunter.update()
        
        if (this.monster) {
            this.monster.update();
            this.checkDeathHunter()
        }

        if(this.score == 10 && this.monsters == 0) {
            this.monster = new monster("monster", this)
            this.monsters++
        } else if (this.score == 30)
        {
            this.destroyScreen();
            this.game.showWinScreen(this.score);
        }
        this.text.innerText = `SCORE: ${this.score}`;  
    }

    public checkDeathHunter() {
        if(this.checkCollision(this.monster.getBoundingRect(), this.hunter.getBoundingRect())) {
            this.destroyScreen();
            this.game.showLoseScreen(this.score);
        }
    }
    public checkCollionGhost() {
        for(let ghost of this.ghosts) {
            if(this.checkCollision(ghost.getBoundingRect(), this.hunter.getBoundingRect())) {
                this.removeGhost(ghost);
            
                // this.object.splice(this.index, this.index +1);
                // object.EatGhost()
            }
        }
    }

    public removeGhost(ghost : Ghost) {
        //console.log(ghost)
        ghost.remove();
        this.ghosts = this.ghosts.filter(e => e != ghost)
        //console.log(this.ghosts)
        this.ghosts.push(new Ghost("ghost", this));
        this.score++
        console.log(this.score)
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

