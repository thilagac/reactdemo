import React from 'react'
import ResumeImg from '../Image/resume.jpg'

function Resume() {
  const config={
   link:" https://pdfobject.com/pdf/sample.pdf " }
  return (
    <section className='flex  flex-col md:flex-row bg-secondary px-3' id="resume">
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4  border-primary mb-5 w-[170px] font-bold'> Resume</h1>
        <p className='text-white pb-5'> You can View My Resume <a href={config.link} className='button'>Download</a>
          </p>
            </div>
      
    </div>
   </section>
  )
}

export default Resume
