import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] bg-primary '>Games Search</h1>
      </div>
      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Games</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>About</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Login</li>
        <li className='menuList text-[#6f6f6f] hover:text-primary'>Register</li>
      </div>
    </div>
  )
}

export default NavBar