import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center">
        <nav className="fixed top-2 mt-4 w-[95%] mx-auto md:max-w-[900px] flex px-6 py-4 justify-between rounded-md  shadow-md bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <ul className="flex flex-1 justify-between">
            <li className="text-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="text-lg">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-lg">
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="w-[20%] sm:w-[50%] flex justify-end" id="night">
            <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
// sm:max-w-[350px] sm:left