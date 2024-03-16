import React from 'react'
import Card from './card'

const Fourthscreen = () => {
  return (
    <div>
         <h2 className="  text-4xl py-8 flex justify-center font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7582f5,_#c4c9f7),_linear-gradient(#ededed,_#ededed),_#2d3648] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]  z-[1] ">
               Meet The Builders
            </h2>
            <div className='flex justify-center gap-8'>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
            </div>
    </div>
  )
}

export default Fourthscreen