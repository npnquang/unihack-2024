import { IoBulbSharp } from "react-icons/io5";
import { SiDcentertainment } from "react-icons/si";
import { IoCheckmarkSharp } from "react-icons/io5";

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[20px] py-[2rem] pb-[3rem] font-bold w-[400px block]
      dont-bold w-[400px] block'> </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#afadf3] h-[40px] w-[40px]
            flex items-center justify-center'>
              {/* <img src="" alt="" className='w-[70%]' /> */}
              <IoBulbSharp />
            </div>
              <span className='font-semibold text-textColor text-[18px]'>
                Simplicity
              </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Our games are really simple but it could surprise you
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#afadf3] h-[40px] w-[40px]
              flex items-center justify-center'>
                {/* <img src="" alt="" className='w-[70%]' /> */}
                <IoCheckmarkSharp />
              </div>
                <span className='font-semibold text-textColor text-[18px]'>
                  Value
                </span>
            </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                  The value that we are chasing is to bring back some classical games
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#afadf3] h-[40px] w-[40px]
              flex items-center justify-center'>
                {/* <img src="" alt="" className='w-[70%]' /> */}
                <SiDcentertainment />
              </div>
                <span className='font-semibold text-textColor text-[18px]'>
                  Entertainment
                </span>
            </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Our games are entertaining and will hook you for hours. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Value

