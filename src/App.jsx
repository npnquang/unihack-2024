import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import SnakeGame from "./components/snake/SnakeGame";
import TicTacToe from "./components/tictactoe/TicTacToe";
import Rpsgame from "./components/rock-pap-sic/Rpsgame";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeGame />}/>
        <Route path="/tictactoe" element={<TicTacToe />}/>
        <Route path="/rpsgame" element={<Rpsgame />}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
