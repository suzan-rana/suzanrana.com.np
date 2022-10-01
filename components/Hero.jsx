import React from "react";
import Image from "next/image";
import slime from "../public/images/slime.png";
// #1A1A1A
// #242424
const Hero = () => {
  return (
    //herosection --w-95%
    <section className="mt-32 w-[95%] max-w-[900px] mx-auto dark:bg-transparent ">
      <h1 className="text-6xl font-clashDisplay font-[700] text-center">
        Suzan Rana
      </h1>
      <h4 className="text-2xl font-medium text-center py-2">
        Developer and designer
      </h4>
      <p className="text-center md:w-[70%]  mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        necessitatibus molestiae itaque dicta, ratione sed minima repudiandae
        facilis ex dignissimos.
      </p>
      <div className="flex justify-center gap-6 mt-8 mb-16">
        <a href="#contact" className="border-[#4bba00] border-[1px] px-4 py-2 text-black rounded-md shadow-md cursor-pointer hover:bg-[#4bba00] hover:text-white dark:text-white">
          Contact me
        </a>
        <a className="bg-[#4bba00] px-4 py-2 text-white rounded-md shadow-md cursor-pointer">
          Resume
        </a>
      </div>
      <div className="w-[70%] mb-8 mx-auto">
        <Image src={slime} />
      </div>
    </section>
  );
};

export default Hero;
