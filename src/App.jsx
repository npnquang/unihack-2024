import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import SnakeGame from "./components/Snake/SnakeGame";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Rpsgame from "./components/rock-pap-sic/Rpsgame";
const App = () => {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snake" element={<SnakeGame />}/>
          <Route path="/tictactoe" element={<TicTacToe />}/>
          <Route path="/rpsgame" element={<Rpsgame />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}
export default App;