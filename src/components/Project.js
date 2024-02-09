import React from "react";
import Img from "../Image/web.png";
import Img2 from "../Image/web.webp";
import Img3 from "../Image/web.jpg";

function Project() {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-1/2">
        <div className="flex justify-center">
          <h1 className="text-4xl text-white border-b-4  border-secondary mb-5 w-[130px] font-bold">
            Project
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex px-5 gap-6">
          <div className="relative">
            <img className="h-[290px]" src={Img} />
            <div className="project-desc">
            <p className="text-center py-10"> A Ecommerce Website .Built Responable to use the all device</p>
          </div>
          </div>
          
          <div className="relative">
            <img className="h-[290px]" src={Img2} />
            <div className="project-desc">
            <p className="text-center py-10"> A Shopping Ecommerce Website .Built by HTML ,CSS, Js </p>
          </div>
          </div>
         
          <div className="relative">
            <img className="h-[290px]" src={Img3} />
            <div className="project-desc">
            <p className="text-center py-10"> A Ecommerce Website .Built Responable to use the all device</p>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Project;
