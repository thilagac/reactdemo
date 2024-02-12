import React from 'react'
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import heroImg from '../Image/front.png'
function Hero() {
  const config ={
    subTittle:'I am a Front-end Developer'
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      
      <div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-white text-6xl font-hero-font '>Hii,<br/>I am Thilaga
      <p className='text-2xl'>{config.subTittle}</p></h1>
    <div className='flex py-10'>
        <a href="#" className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href="#" className='pr-5  hover:text-white'><AiOutlineInstagram size={40} /></a>
        <a href="#" className='pr-5  hover:text-white'><AiOutlineLinkedin  size={40}/></a>
    </div>
        </div>
        <img src={heroImg} className='md:w-1/3 '/>
    </section>
  )
}

export default Hero
