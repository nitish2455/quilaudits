import React from 'react'
import Decenter from './decenter'
import Applycard from './applycard'

const Home = () => {
  return (
    <section className="self-stretch flex justify-center pt-6 ">
       <Decenter/>
       <Applycard/>
      </section>
  )
}

export default Home