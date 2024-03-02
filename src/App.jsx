import NavBar from "./components/navbar/NavBar"
import Search from "./components/searchdiv/Search"
import Games from "./components/gamediv/Games"
import Footer from "./components/footer/Footer"
import Value from "./components/value/Value"
import SnakeGame from "./components/Snake/SnakeGame"
const App = () => {
  return (
    <div className="w-[85%] m-auto bg-slate-50">
      <NavBar />
      <Search />
      <Games/>
      <Value />
      <Footer />
      <SnakeGame />
    </div>
  )
}
export default App
