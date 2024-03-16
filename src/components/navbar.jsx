import React from 'react'

const Navbar = () => {
    
    return (
    <div className='flex justify-center gap-8 bg-black '>
      <div className='flex gap-2 pt-2'>
      <img
            className="w-[35px] h-[30px]  z-[6]"
            alt=""
            src="/icon.svg"
          />
          <img
            className="w-[120px] h-[30px]  z-[6] "
            alt=""
            src="/quillaudits.svg"
          />
      </div>
     <button className='text-white text-sm'>
      Services
     </button>
     <button className='text-white text-sm'>
      Pricing
     </button>
     <button className='text-white text-sm'>
     Our Audits
     </button>
     <button className='text-white text-sm'>
    Tools
     </button>
     <button className='text-white text-sm'>
  Resources
     </button>
     <button className='text-white text-sm'>
  Refer-earn-secure
     </button>
      <button className="cursor-pointer [border:none] p-2  bg-[transparent]  rounded-[8.03px] [background:linear-gradient(266.04deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_13.4px_20.08px_-4.02px_rgba(0,_0,_0,_0.1),_0px_5.4px_8.03px_-5.36px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border whitespace-nowrap z-[6]">
          <div className="flex-1 relative text-2xl-4 leading-[32.13px] font-medium font-jost text-white text-center">
            Request An Audit
          </div>
        </button>
    </div>
       

    )
}

export default Navbar