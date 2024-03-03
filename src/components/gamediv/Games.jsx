import React from 'react'
import { GiTicTacToe } from "react-icons/gi";

// list all games called data
const Data = [
  {
  id: 1,
  name: 'Tic Tac Toe',
  description: 'A simple game of tic tac toe',
  category: 'Entertainment, Puzzle',
  game_provider: 'npnq',
  route: '/tictactoe'
  },
  {
    id: 2,
  name: 'Snake Game',
  description: 'A simple game of tic tac toe',
  category: 'Entertainment, Puzzle',
  game_provider: 'khn',
  route: '/snake'
  },
  {
    id: 3,
    name: 'Puzzle Game',
    description: 'A simple game of tic tac toe',
    category: 'Entertainment, Puzzle',
    game_provider: 'arnav',
  },
  {
    id: 4,
    name: 'Pac Man Game',
    description: 'A simple game of tic tac toe',
    category: 'Entertainment, Puzzle',
    game_provider: 'ntnd',
    route: "/pacman"
  }  
]

const Games = () => {
  return (
    <div>
      <div className=' GamesContainer flex gap-10 justify-center flex-wrap 
      items-center py-10'>
       {
        Data.map(({id, name, description, category, game_provider, route}) => {
          return(
              <div key={id} className='group group/item singleGames w-[250px] p-[20px] bg-white rounded[10px]
              hover:bg-blue-600 shadow-lg shadow-greyC-400/700 hover:shadow-lg cursor-pointer'>
            <span className='flex justify-between items-center gap-4'> 
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'> {name}</h1>
              <span className='flex items-center'>
                <GiTicTacToe />
              </span>
            </span>
            <h6 className='text-[#ccc]'>{game_provider}</h6>
            <h6 className='text-[#ccc]'>{category}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] boarder-t-[2px] mt-[20px] group-hover:text-white'>
              {description}
            </p>
            <a href={route}>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[15px] font-semibold
              text-textColor hover:bg-slate-300 group-hover/item:text-textColor group-hover:text-grey'>Play Now</button>
            </a>
            
          </div>
          )
        })
       }
      
      </div>
    </div>
  )
}

export default Games