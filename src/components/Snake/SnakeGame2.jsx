import { useState, useEffect } from "react";
import Snake from "./Snake"; 
import Food from "./Food"; 
import Button from "./Button"; 
import Menu from "./Menu"; 
import "./SnakeGame.css"; 


const getRandomFood = () => { 
  let min = 1; 
  let max = 98; 
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2; 
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2; 
  return [x, y]; 
}; 

const initialState = { 
  food: getRandomFood(), 
  direction: "RIGHT", 
  speed: 100, 
  route: "menu", 
  snakeDots: [ 
      [0, 0], 
      [0, 2], 
  ], 
}; 



function SnakeGame() {
  const [gameState, setGameState] = useState(initialState);
  
  useEffect(
    () => {
      const onKeyDown = (e) => { 
        e.preventDefault(); 
        switch (e.keyCode) { 
            case 37: 
                setGameState({ ...gameState, direction: "LEFT" }); 
                break; 
            case 38: 
                setGameState({ ...gameState, direction: "UP" }); 
                break; 
            case 39: 
                setGameState({ ...gameState, direction: "RIGHT" }); 
                break; 
            case 40: 
                setGameState({ ...gameState, direction: "DOWN" }); 
                break; 
        } 
      }

      function moveSnake() { 
        let dots = [...gameState.snakeDots]; 
        let head = dots[dots.length - 1]; 
        if (this.state.route === "game") { 
            switch (this.state.direction) { 
                case "RIGHT": 
                    head = [head[0] + 2, head[1]]; 
                    break; 
                case "LEFT": 
                    head = [head[0] - 2, head[1]]; 
                    break; 
                case "DOWN": 
                    head = [head[0], head[1] + 2]; 
                    break; 
                case "UP": 
                    head = [head[0], head[1] - 2]; 
                    break; 
            } 
            dots.push(head); 
            dots.shift(); 
            setGameState({ 
                ...gameState,
                snakeDots: dots, 
            }); 
        } 
      }

      const interval = setInterval(moveSnake, gameState.speed);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        clearInterval(interval);
        document.removeEventListener("keydown", onKeyDown);
      };
    },
    [gameState]
  )



  

  

  function onSnakeOutOfBounds() { 
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]; 
    if (this.state.route === "game") { 
        if ( 
            head[0] >= 100 || 
            head[1] >= 100 || 
            head[0] < 0 || 
            head[1] < 0 
        ) { 
            this.gameOver(); 
        } 
    } 
  } 

  function onSnakeCollapsed() { 
    let snake = [...this.state.snakeDots]; 
    let head = snake[snake.length - 1]; 
    snake.pop(); 
    snake.forEach((dot) => { 
        if (head[0] == dot[0] && head[1] == dot[1]) { 
            this.gameOver(); 
        } 
    }); 
  } 


  function onSnakeEats() { 
    let head = gameState.snakeDots[gameState.snakeDots.length - 1]; 
    let food = gameState.food; 
    if (head[0] == food[0] && head[1] == food[1]) { 
        setGameState({ 
          ...gameState,
          food: getRandomFood(), 
        }); 
        increaseSnake(); 
        increaseSpeed(); 
    } 
  } 

  function increaseSnake() { 
    let newSnake = [...gameState.snakeDots]; 
    newSnake.unshift([]); 
    setGameState({ 
      ...gameState,
      snakeDots: newSnake, 
    }); 
  } 

  function increaseSpeed() { 
    if (gameState.speed > 10) { 
        setGameState({ 
          ...gameState,
          speed: gameState.speed - 20, 
        }); 
    } 
  }
  
  function onRouteChange() { 
    setGameState({
      ...gameState, 
      route: "game", 
    }); 
  }

  function gameOver() { 
    alert(`GAME OVER, your score is ${gameState.snakeDots.length - 2}`); 
    setGameState(initialState); 
  }

  function onDown() { 
    let dots = [...gameState.snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0], head[1] + 2]; 
    dots.push(head); 
    dots.shift(); 
    setGameState({ 
      ...gameState,  
      direction: "DOWN", 
        snakeDots: dots, 
    }); 
  }

  function onUp() { 
    let dots = [...gameState.snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0], head[1] - 2]; 
    dots.push(head); 
    dots.shift(); 
    setGameState({ 
      ...gameState,  
      direction: "UP", 
        snakeDots: dots, 
    }); 
  }

  function onRight() { 
    let dots = [...gameState.snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0] + 2, head[1]]; 
    dots.push(head); 
    dots.shift(); 
    setGameState({ 
      ...gameState,  
      direction: "RIGHT", 
        snakeDots: dots, 
    }); 
  }

  function onLeft() { 
    let dots = [...gameState.snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0] - 2, head[1]]; 
    dots.push(head); 
    dots.shift(); 
    setGameState({ 
      ...gameState,  
      direction: "LEFT", 
        snakeDots: dots, 
    }); 
  }

  
  return ( 
    <div> 
      {gameState.route === "menu" ? ( 
        <div> 
          <Menu onRouteChange={onRouteChange} /> 
        </div> 
      ) : ( 
        <div> 
          <div className="game-area"> 
            <Snake snakeDots={gameState.snakeDots} /> 
            <Food location={gameState.food} /> 
          </div> 
          <Button 
            onDown={onDown} 
            onLeft={onLeft} 
            onRight={onRight} 
            onUp={onUp} 
          /> 
        </div> 
      )} 
    </div> 
  ); 
    


}