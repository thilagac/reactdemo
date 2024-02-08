import React, { useState } from "react";
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'
function Header() {
    const[toggleMenu,SetTaggleMenu]=useState(false)
  return (
    <header className="flex justify-between px-5 py-3 bg-primary">
      <a  className =" test-black font-bold font-header" href="#">Thilaga</a>
      <nav className="hidden md:block ">
      <ul className="flex  text-emerald-50 ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      </nav>
      {toggleMenu&& <nav className="block md:hidden  ">
      <ul className="flex flex-col text-emerald-50 mobile-nav ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      </nav>}
      <button className="block md:hidden" onClick={()=> SetTaggleMenu(!toggleMenu)}><Bars3Icon className="text-white h-5"/></button>
    
    </header>
  );
}

export default Header;
