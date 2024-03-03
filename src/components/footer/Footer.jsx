import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
// import facebook from 'https://www.facebook.com/Monash.University/'
// import instagram from 'https://www.instagram.com/monash_uni/?hl=en'
// import linkedin from 'https://www.linkedin.com/school/monash-university/?originalSubdomain=au'

const Footer = () => {
  return (
    <div className='footer p-[2.5rem] mb-4 bg-blueC rounded-[10px] gap-[8] grid
    grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Games search</strong> 
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          The Dev Team pays our respects to the Elders, past and present.
        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          DeV Team
        </span>
        <div className='grid gap-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Online Recources
        </span>
        <div className='grid gap-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Emails</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div>
          <small className='text-[14px] text-white'>
            Wellington Road, Clayton VIC 3800
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='text-white text-[30px] hover:text-[#e4405f] cursor-pointer'/>
            <BsFacebook className='text-white text-[30px] hover:text-[#3b5998] cursor-pointer'/>
            <AiFillLinkedin className='text-white text-[30px] hover:text-[#0e76a8] cursor-pointer'/>
            <AiOutlineTwitter className='text-white text-[30px] hover:text-[#00acee] cursor-pointer'/>
          </div>

        </div>

      </div>
    </div>
  )
}
export default Footer
