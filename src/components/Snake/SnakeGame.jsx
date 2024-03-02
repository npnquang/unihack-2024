import { useState, useEffect, useCallback } from "react";
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
  food: getRandomFood, 
  direction: "RIGHT", 
  speed: 100, 
  route: "menu", 
  snakeDots: [ 
      [0, 0], 
      [0, 2], 
  ], 
}; 

function SnakeGame() {
  const [food, setFood] = useState(initialState.food());
  const [direction, setDirection] = useState(initialState.direction);
  const [speed, setSpeed] = useState(initialState.speed);
  const [route, setRoute] = useState(initialState.route);
  const [snakeDots, setSnakeDots] = useState(initialState.snakeDots);
  
  const moveSnake = useCallback(
    ()=> { 
      let newDots = [...snakeDots];
      let head = snakeDots[snakeDots.length - 1]; 
      if (route === "game") { 
        switch (direction) { 
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
        newDots.push(head); 
        newDots.shift(); 
        setSnakeDots(newDots); 
      } 
    },
    [direction, route, snakeDots]
  );

  const onKeyDown = useCallback(
    (e) => { 
      e.preventDefault(); 
      switch (e.keyCode) { 
        case 37: 
            setDirection("LEFT"); 
            break; 
        case 38: 
            setDirection("UP"); 
            break; 
        case 39: 
            setDirection("RIGHT"); 
            break; 
        case 40: 
            setDirection("DOWN"); 
            break; 
      } 
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [speed, moveSnake, onKeyDown]);



  useEffect(
    () => {
      onSnakeOutOfBounds();
      onSnakeCollapsed();
      onSnakeEats();
    }
  ); 

  function onSnakeOutOfBounds() { 
    let head = snakeDots[snakeDots.length - 1]; 
    if (route === "game") { 
        if ( 
            head[0] >= 100 || 
            head[1] >= 100 || 
            head[0] < 0 || 
            head[1] < 0 
        ) { 
            gameOver(); 
        } 
    } 
  } 

  function onSnakeCollapsed() { 
    let snake = [...snakeDots]; 
    let head = snake[snake.length - 1]; 
    snake.pop(); 
    snake.forEach((dot) => { 
        if (head[0] == dot[0] && head[1] == dot[1]) { 
            gameOver(); 
        } 
    }); 
  } 


  function onSnakeEats() { 
    let head = snakeDots[snakeDots.length - 1];  
    if (head[0] == food[0] && head[1] == food[1]) { 
        setFood(getRandomFood()); 
        increaseSnake(); 
        increaseSpeed(); 
    } 
  } 

  function increaseSnake() { 
    let newSnake = [...snakeDots]; 
    newSnake.unshift([]); 
    setSnakeDots(newSnake); 
  } 

  function increaseSpeed() { 
    if (speed > 10) { 
        setSpeed(speed - 20); 
    } 
  }
  
  function onRouteChange() { 
    setRoute("game"); 
  }

  function gameOver() { 
    alert(`GAME OVER, your score is ${snakeDots.length - 2}`); 
    setFood(initialState.food());
    setDirection(initialState.direction);
    setSpeed(initialState.speed);
    setRoute(initialState.route);
    setSnakeDots(initialState.snakeDots); 
  }

  function onDown() { 
    let dots = [...snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0], head[1] + 2]; 
    dots.push(head); 
    dots.shift(); 
    setDirection("DOWN");
    setSnakeDots(dots);
  }

  function onUp() { 
    let dots = [...snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0], head[1] - 2]; 
    dots.push(head); 
    dots.shift(); 
    setDirection("UP");
    setSnakeDots(dots);
  }

  function onRight() { 
    let dots = [...snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0] + 2, head[1]]; 
    dots.push(head); 
    dots.shift(); 
    setDirection("RIGHT");
    setSnakeDots(dots);
  }

  function onLeft() { 
    let dots = [...snakeDots]; 
    let head = dots[dots.length - 1]; 

    head = [head[0] - 2, head[1]]; 
    dots.push(head); 
    dots.shift();
    setDirection("LEFT");
    setSnakeDots(dots);
    
  }

  
  return ( 
    <div> 
      {route === "menu" ? ( 
        <div> 
          <Menu onRouteChange={onRouteChange} /> 
        </div> 
      ) : ( 
        <div> 
          <div className="game-area"> 
            <Snake snakeDots={snakeDots} /> 
            <Food location={food} /> 
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

export default SnakeGame;