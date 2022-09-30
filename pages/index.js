import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <div className="font-inter mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
// text-black text-xl max-w-[50%] mx-auto bg-gray-500 py-2 gap-6 bg-opacity-60 backdrop-filter backdrop-blur-lg
