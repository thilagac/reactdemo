import React from 'react'

import heroImg from '../Image/front.png'
function Hero() {
  return (
    <section className='flex px-5 py-32 bg-secondary justify-center'>
      
      <div className='w-1/2 flex flex-col'>
      <h1 className='w-1/2 text-white text-6xl font-hero-font '>Hii,<br/>I am Thilaga
      <p className='text-2xl'>I am a Front-end Developer</p></h1>
    <div>
        <a href="#"></a>
    </div>
        </div>
        <img src={heroImg} className='w-1/3'/>
    </section>
  )
}

export default Hero
