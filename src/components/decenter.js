import React from 'react'

const Decenter = () => {
  return (
    <div className='bg-black py-3 pt-8'>
    <p className='text-white text-4xl py-3'>Decentralised Derby</p>
    <div className='flex gap-2 '>
        <p className='text-white'>Powered by </p>
        <div className='flex '>

        <img
          className=" w-[30px] h-[25px]  z-[7]"
          alt=""
          src="/quillshield.svg"
        />
        <img
          className=" w-[100px] h-[15px] "
          alt=""
          src="/group-1261153356.svg"
        />
        </div>
    </div>
    <p className='text-white text-2xl py-3'>Accelerating Web3 Growth,<br/>One Derby at a time</p>
    <div className="w-[419px] relative text-base tracking-[-0.01em] leading-[24px] font-medium font-jost inline-block max-w-full z-[7] text-white">
        <span className="whitespace-pre-wrap text-gray-600">{`QuillAudits  --> Events -->`}</span>
        <span className="text-white"> Decentralized Derby</span>
      </div>
    </div>
  )
}

export default Decenter