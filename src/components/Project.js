import React from "react";
import Img from "../Image/web.png";
import Img2 from "../Image/web.webp";
import Img3 from "../Image/web.jpg";

function Project() {
  const config = {
    project: [
      {
        image: Img,
        description:
          " A Ecommerce Website .Built Responable to use the all device",
        link: "https://github.com/thilagac/31.1.24react.js",
      },
      {
        image: Img2,
        description: " A Shopping Ecommerce Website .Built by HTML ,CSS, Js ",
        link: "https://github.com/thilagac/crud",
      },
      {
        image: Img3,
        description:
          "A Ecommerce Website .Built Responable to use the all device",
        link: "https://github.com/thilagac/reactdemo",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="project"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4  border-secondary mb-5 w-[130px] font-bold">
            Project
          </h1>
          <p>
            These Are some of My Best Project.I have built these with React.js
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-5 gap-6">
          {config.project.map((project) => (
          
              <div className="relative">
                <img className="h-[290px] w-[500px]" src={project.image} />
                <div className="project-desc">
                  <p className="text-center px-5 py-10">
                    {project.description}
                  </p>
                  <div className="flex justify-center">
                  <a  className="button"target="_blank"href={project.link}>Link</a>
                </div>
                </div>
              
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
