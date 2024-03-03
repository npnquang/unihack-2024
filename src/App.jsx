import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import SnakeGame from "./components/snake/SnakeGame";
import TicTacToe from "./components/tictactoe/TicTacToe";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeGame />}/>
        <Route path="/tictactoe" element={<TicTacToe />}/>

      </Routes>
    </BrowserRouter>
    
  )
}
export default App
