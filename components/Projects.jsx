import React from "react";
import Image from "next/image";
import Trello from "../public/images/trello.png";
import Ecwid from "../public/images/ecwid.png";
import BookmarkManager from "../public/images/bookmarkManager.png";
import Manage from "../public/images/manage.png";

const Projects = () => {
  return (
    <div className="max-w-[900px] w-[90%] mx-auto my-20 ">
      <h1 className="font-clashDisplay text-center text-5xl font-semibold">
        Projects
      </h1>
      <p className="text-md leading-8 py-4 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        dolor ut natus quos molestiae vel assumenda cupiditate quae cum maiores.
      </p>
      {/* boxes=================== */}
      <div className="flex flex-col lg:justify-between flex-wrap gap-12 md:flex-row ">
        <div className="shadow-lg rounded-xl overflow-hidden px-6 py-6 lg:w-[45%]">
          <Image src={Trello} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Trello
          </h3>
          <p className="py-6">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/Trello/" target="_blank"
            className="text-blue-600 underline hover:no-underline"
          >
            Visit site here.
          </a>
        </div>
        <div className="shadow-lg rounded-xl px-6 py-6 lg:w-[45%]">
          <Image src={Ecwid} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Ecwid
          </h3>
          <p className="py-6">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/trello/"
            className="text-blue-600 underline hover:no-underline"
          >
            Visit site here.
          </a>
        </div>
        <div className="shadow-lg rounded-xl px-6 py-6 lg:w-[45%]">
          <Image src={BookmarkManager} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            BookmarkManager
          </h3>
          <p className="py-6">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/trello/"
            className="text-blue-600 underline hover:no-underline"
          >
            Visit site here.
          </a>
        </div>
        <div className="shadow-xl rounded-xl px-6 py-6 lg:w-[45%]">
          <Image src={Manage} className="rounded-md" />
          <h3 className="text-3xl font-semibold font-clashDisplay mt-4">
            Manage
          </h3>
          <p className="py-6">
            This project was made using TailwindCSS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam corrupti dolorum consequuntur
            modi velit. Magnam?
          </p>
          <a
            href="https://suzan-rana.github.io/trello/"
            className="text-blue-600 underline hover:no-underline"
          >
            Visit site here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
