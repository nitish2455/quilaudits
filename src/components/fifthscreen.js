import React from 'react'
import Cards from './cards'

const Fifthscreen = () => {
  return (
   <div>
 <h2 className="  text-4xl py-8 flex justify-center font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7582f5,_#c4c9f7),_linear-gradient(#ededed,_#ededed),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  z-[1] ">
              Check Out Our Past Events
            </h2>
    <div className='flex justify-center gap-5'>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
   </div>
  )
}

export default Fifthscreen