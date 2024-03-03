// Game.js
 
import {Component} from "react";
 
class Game extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerVal : null,
            computerVal : null,
            playerScore: 0,
            compScore: 0,
        };
    }
    logic = (playerVal, computerVal)=>{
        if(playerVal == computerVal){
            return 0;
        } else if ((playerVal == "ROCK" && computerVal == "SCISSORS") ||
            (playerVal == "SCISSORS" && computerVal == "PAPER") ||
            (playerVal == "PAPER" && computerVal == "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }
 
    decision = (playerChoice)=> {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = this.logic(playerChoice, compChoice)
        if(val == 1) {
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice, 
                playerScore : this.state.playerScore +1
            })
        } else if(val == -1) {
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice,
                compScore : this.state.compScore +1
            })
        } else {
            this.setState({
                computerVal : compChoice,
                playerVal : playerChoice
            })
        }
    }
    render(){
        const {playerVal, computerVal, playerScore, compScore} = this.state;
        return(
            <div className="container text-center mx-12">
                <h1 className="my-2 mb-3">Welcome to Rock, Paper, Scissors Game</h1>
                <div >
                    <button  className="text-black mx-2 my-5" onClick={()=>this.decision("ROCK")}>
                        <i className={`fas fa-hand-rock my-2`} /> Rock
                        <svg width="100" height="100" xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/1200px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg">
                            <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/1200px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg" height="100" width="100" />
                        </svg>
                    </button>
                    <button className="text-black mx-2"  onClick={()=>this.decision("PAPER")}>
                        <i className={`fas fa-hand-paper my-2`} /> Paper
                        <svg width="100" height="100" xmlns="https://upload.wikimedia.org/wikipedia/commons/2/25/Various_products_made_from_paper.JPG">
                            <image href="https://upload.wikimedia.org/wikipedia/commons/2/25/Various_products_made_from_paper.JPG" height="100" width="100"/>
                        </svg>
                    </button>
                    <button className="text-black mx-2"  onClick={()=>this.decision("SCISSORS")}>
                        <i className={`fas fa-hand-scissors my-2`} />  Scissors 
                        <svg width="100" height="100" xmlns="https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg">
                            <image href="https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg" height="100" width="100" />
                        </svg>
                    </button>
                </div>
                <div className="content mx-2 my-2">
                    <p className="text-center">Your choice: {playerVal}</p>
                    <p className="text-center">Computer&apos;s choice: {computerVal}</p>
                    <h2 className="text-center">Your Score:{playerScore}</h2>
                    <h2 className="text-center">Computer Score: {compScore}</h2>
                </div>
            </div>
        )
    }
}
 
export default Game;