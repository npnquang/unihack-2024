import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { FaPerson } from "react-icons/fa6";

const Search = () => {
  return (
    <div className='searchDiv grid gap-8 bg-greyC rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap- [10px] bg-white p-5 shadow-grey-700'>
          <div className='flex gap-3 items-center'>
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-600 focus:outline-none w-[100%] ' placeholder='Search for games'/>
              <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <div className='flex gap-3 items-center'>
            <FaPerson className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-600 focus:outline-none w-[100%] ' placeholder='Search by the provider'/>
              <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <button className='bg-blueC h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-100'> Search</button>

        </div>
      </form>
      <div className='secDiv flex items-center gap-2'>
        <label htmlFor="relevant" className='text-#808080 font-semibold'>Sort by:</label>

        <select name="" id="relevance" className='bg-white rounded-[3px]'>
          <option value="">Relevance</option>
          <option value="">Popular</option>
          <option value="">Newest</option>
        </select>

      </div>

      <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

    </div>
  )
}

export default Search