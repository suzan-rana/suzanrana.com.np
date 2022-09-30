import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div>
      <div className="font-inter mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
// text-black text-xl max-w-[50%] mx-auto bg-gray-500 py-2 gap-6 bg-opacity-60 backdrop-filter backdrop-blur-lg
