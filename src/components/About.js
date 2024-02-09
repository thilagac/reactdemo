import React from 'react'
import AboutImg from '../Image/about.png'
function About() {
  return (
 
       <section className='flex  flex-col md:flex-row bg-secondary px-3'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4  border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='text-white pb-5'>Hi,My Name is T.Thilagavathi. I am a Front-End Developer. I built Beautiful Website Using React.js,TailWind CSS.
              </p>
              <p className='text-white pb-5'>I am interesting to Create the UI design ,My skils are HTML,CSS,Javascript,React.JS </p>
            </div>
          
        </div>
       </section>
 
  )
}

export default About
