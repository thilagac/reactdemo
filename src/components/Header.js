import React, { useState } from "react";
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'
function Header() {
    const[toggleMenu,SetToggleMenu]=useState(false)
  return (
    <header className="flex justify-between px-5 py-3 bg-primary header">
      <a  className =" test-black font-bold font-header" href="#">Thilaga</a>
      <nav className="hidden md:block ">
      <ul className="flex  text-emerald-50 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </nav>
      {toggleMenu&& <nav className="block md:hidden">
      <ul onClick= {()=>SetToggleMenu(!toggleMenu)}className="flex flex-col text-emerald-50 mobile-nav ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </nav>}
      <button className="block md:hidden" onClick={()=> SetToggleMenu(!toggleMenu)}><Bars3Icon className="text-white h-5"/></button>
    
    </header>
  );
}

export default Header;
