'use client'
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import ContactForm from "./components/contactForm";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </Head>
      <main className="relative flex flex-col md:flex-row min-h-screen min-w-screen h-screen p-6 md:p-24 bg-gray-300 overflow-hidden">
        {/* Moving Squares */}
        <div className="absolute inset-0 flex items-start justify-start gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-end justify-end gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
          <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
        </div>

        {/* Left Side */}
        <div className="flex flex-col items-start justify-start h-full w-full md:w-1/2 z-10 gap-4">
          <div>
            <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold leading-tight">ARMAAN</p>
            <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold leading-tight">JAMIL</p>
            <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold leading-tight">HOSSAIN</p>
          </div>
          <div className="flex flex-col items-start justify-end h-full mt-4 md:mt-0">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-snug">
              A software engineer who leverages ReactJS, Python, and a strong
              foundation in Computer Science and Cybersecurity to deliver secure,
              high-quality solutions within Agile teams, driven by continuous
              learning, innovation, and a passion for collaboration.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end justify-evenly w-full md:w-1/2 h-full pb-10 pt-10 z-10 gap-4">
          <div className="w-full">
            <Link href="/work">
              <p className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105">WORK</p>
            </Link>
          </div>
          <div className="w-full mt-4">
            <Link href="/about">
              <p className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105">ABOUT</p>
            </Link>
          </div>
          <div className="w-full mt-4">
            <p 
              onClick={() => setFormVisible(true)} 
              className="cursor-pointer text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105"
            >
                CONTACT ME
            </p>
          </div>
          <AnimatePresence>
            {isFormVisible && (
              <ContactForm
                onClose={() => setFormVisible(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
