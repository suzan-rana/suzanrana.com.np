import React from "react";

const copyText = () => {
  const tag = document.getElementById("copyField");
  tag.classList.toggle(`bg-[#4bba00]`);
  tag.classList.toggle(`text-white`);
  navigator.clipboard.writeText(tag.value);
};
// #1A1A1A
// #242424
const About = () => {
  return (
    <div className="my-12 p-4 mx-auto max-w-[900px] w-[90%]">
      <h1 className="text-center font-clashDisplay font-semibold text-5xl">
        About Me
      </h1>
      <p className="text-xl py-6 leading-8 ">
        Hello, my name is Suzan Rana, a developer based in Nepal. I love
        programming and building web applications and solving the problems of
        multiple people through technology. Every time I solve a new problem and
        help people and business grow, it makes my heart warm and glad and the
        sense of satisfaction of that particular moment keeps me moving forward.
      </p>
      <h3 className="text-center text-xl text-[#337308] font-clashDisplay my-8 ">If you wish to say Hello, or talk about anything. I am here for you.</h3>
      <div className="text-center text-3xl underline font-clashDisplay cursor-pointer">
        <a href="mailto:dev.suzan@gmail.com" >
          Click here to open in Mail.
        </a>
      </div>
        <p className="text-center text-xl mt-10 mb-6">or click below to COPY in Clipboard</p>
      <div className="text-center" id="parent">
        <input
          readonly
          className="text-xl border-[1px] font-clashDisplay cursor-pointer py-4 px-6 text-center  text-black rounded-md "
          id="copyField"
          type="text"
          value="dev.suzan@gmail.com"
          onClick={copyText}

        />  
        
      </div>
    </div>
  );
};

export default About;
