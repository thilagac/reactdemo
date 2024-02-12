import React from 'react'
import AboutImg from '../Image/about.png'
function About() {
  const config={
    line1:'Hi,My Name is T.Thilagavathi. I am a Front-End Developer. I built Beautiful Website Using React.js,TailWind CSS + Boostrap',
    line2:'I am interesting to Create the UI design ,My skils are HTML,CSS,Javascript,React.JS',
   
  }
  return (
 
       <section className='flex  flex-col md:flex-row bg-secondary px-3' id="about">
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4  border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='text-white pb-5'>{config.line1}
              </p>
              <p className='text-white pb-5'>{config.line2} </p>
            </div>
          
        </div>
       </section>
 
  )
}

export default About
