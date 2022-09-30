import React from "react";
import Image from "next/image";
import imageCSS from "../public/images/skills/css.png";
import imageJS from "../public/images/skills/js.png";
import Tailwind from "../public/images/skills/tailwind.png";
import ReactJS from "../public/images/skills/reactjs.png";
import NextJS from "../public/images/skills/nextjs.png";
import MongoDb from "../public/images/skills/mongodb.png";
import Express from "../public/images/skills/Expressjs.png";
import Node from "../public/images/skills/node.png";
import Git from "../public/images/skills/git.png";

const Skills = () => {
  return (
    <section className="skills">
      <div className="max-w-[900px] w-[90%] mx-auto my-20 ">
        <h1 className="font-clashDisplay text-center text-5xl py-4 font-semibold">
          Skills
        </h1>
        <p className="md:text-lg text-gray-700 leading-8 pb-8 text-center md:w-[65%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          dolor ut natus quos molestiae vel assumenda cupiditate quae cum
          maiores.
        </p>
        {/* skill-cards  */}
        <div className="flex flex-col lg:justify-between gap-12 md:flex-row ">
          <div className="shadow-md p-8 rounded-xl lg:w-[45%] cursor-pointer bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <h3 className="text-3xl w-[80%] mx-auto text-center  font-clashDisplay ">
              Frontend Development and Skills
            </h3>
            {/* image  */}
            <div className="flex flex-col md:flex-row my-4 flex-wrap justify-between space-y-6 items-center">
              <div className="w-[100px]">
                <Image src={ReactJS} className="max-w-[100%] block" />
              </div>
              <div className="w-[200px]">
                <Image src={Tailwind} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={imageCSS} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={imageJS} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={NextJS} className="max-w-[100%] block" />
              </div>
            </div>
          </div>

          <div className="shadow-md  p-8 rounded-xl lg:w-[45%] bg-white cursor-pointer bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <h3 className="text-3xl w-[80%] mx-auto text-center  font-clashDisplay ">
              Backend Development and Skills
            </h3>
            {/* image  */}
            <div className="flex flex-col md:flex-row my-4 justify-between space-y-6 md:flex-wrap items-center">
              <div className="w-[100px]">
                <Image src={Node} className="max-w-[100%] block" />
              </div>
              <div className="w-[200px]">
                <Image src={Express} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={MongoDb} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={imageJS} className="max-w-[100%] block" />
              </div>
              <div className="w-[100px]">
                <Image src={Git} className="max-w-[100%] block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
