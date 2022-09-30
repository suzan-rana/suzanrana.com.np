import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
// #1A1A1A
// #242424
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // if(darkMode) {
  //   const projectRef = useRef()
  //   projectRef.classList.toggle('dark:text-white')
  // }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="font-inter mx-auto dark:bg-[#1A1A1A] dark:text-white">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode}  />
        <Hero />
        <section className="projects pt-12 dark:bg-[#1A1A1A]" id="projects">
          <Projects />
          <p className="text-center font-clashDisplay text-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg   px-4 py-6">
            <Link href="/">
              <a className="cursor-pointer underline hover:no-underline">
                View all projects <BsArrowRight className="inline-block" />
              </a>
            </Link>
          </p>
        </section>

        <Skills />
        <div id="about">
          <About />
        </div>
      </div>
    </div>
  );
}
// text-black text-xl max-w-[50%] mx-auto bg-gray-500 py-2 gap-6 bg-opacity-60 backdrop-filter backdrop-blur-lg
