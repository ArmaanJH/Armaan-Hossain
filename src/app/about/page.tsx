'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from 'react-icons/ri';


export default function About() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const handleCircleClick = (panelId: string) => {
    setActivePanel(panelId === activePanel ? null : panelId);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About</title>
      </Head>
      <main className="relative flex flex-row min-h-screen min-w-screen bg-gray-300 p-24 overflow-hidden">
      <div className="absolute top-4 left-4 z-20 sm:top-2 sm:left-2">
          <button
            onClick={() => window.location.href = '/'}
            className="text-white p-2 rounded-full transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faHome} size="4x" />
          </button>
        </div>
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

        {/* Left Side: Profile and Title */}
        <div className="flex flex-col justify-center w-1/2 h-full p-8 z-10">
          <div>
            <p className="text-4xl sm:text-6xl md:text-8xl text-center text-white font-bold leading-tight pb-12">ABOUT</p>
          </div>
          <div className="flex justify-center w-full h-auto">
            <Image
              src={'/images/profile.jpg'}
              alt={'Armaan Hossain Portrait'}
              width={500}
              height={500}
              className={'rounded-xl border-white border-8'}
            />
          </div>
        </div>

        {/* Right Side: Circles */}
        <div className="flex-1 flex flex-col items-end justify-evenly p-4 gap-6 z-10">
          {/* Circles that trigger panels */}
          <div className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105" onClick={() => handleCircleClick('tech')}>
            TECH
          </div>
          <div className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105" onClick={() => handleCircleClick('education')}>
            EDUCATION
          </div>
          <div className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105" onClick={() => handleCircleClick('collaboration')}>
            TEAMWORK
          </div>
          <div className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105" onClick={() => handleCircleClick('socials')}>
            SOCIALS
          </div>
        </div>

        {/* Sliding Panel */}
        <motion.div
          className="fixed top-0 right-0 h-full bg-gray-900 border-l-4 border-gray-300 text-white p-8 w-1/2 overflow-y-auto z-10 flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: activePanel ? '0%' : '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Flex container to align items */}
          <div className="flex justify-between items-center mb-16">
            <button
              className="text-white"
              onClick={() => setActivePanel(null)}
            >
              <FontAwesomeIcon icon={faArrowRight} size="3x" />
            </button>
          </div>

          {activePanel === 'tech' && (
            <>
              <div>
                <h2 className="text-5xl font-bold mb-4">TECH</h2>
                <p className="text-xl">
                  As a dedicated and passionate Software Engineer at LS Technologies, I specialize in leveraging ReactJS and Python within an Agile environment to deliver high-quality, innovative solutions. With a robust foundation in Computer Science and a keen understanding of Cybersecurity, I bring a unique blend of skills to the table, ensuring both functional and secure software development.
                </p>
              </div>
              <div className="text-left pt-8">
                <p className="text-3xl font-bold py-2">FRONT-END TECHNOLOGIES</p> 
                <p className="pb-8 font-semibold">ReactJS, NextJS, React Native, JQuery, Tailwind CSS,</p>
                <p className="text-3xl font-bold py-2">BACK-END TECHNOLOGIES</p>
                <p className="pb-8 font-semibold">NodeJS, ExpressJS, SQL, NoSQL DB, Django, GraphQL</p>
                <p className="text-3xl font-bold py-2">DEVELOPMENT TOOLS</p>
                <p className="pb-8 font-semibold">NPM, Git, Docker, Jira, Expo Go, AWS, iOS, Figma, Stripe</p>
              </div>
            </>
          )}
          {activePanel === 'education' && (
            <>
              <div>
                <h2 className="text-5xl font-bold mb-4">EDUCATION</h2>
                <p className="text-xl">
                  I hold a Bachelor of Science in Computer Science, which has equipped me with a comprehensive understanding of the core principles of computing. My professional journey is characterized by a relentless pursuit of growth and learning, always striving to expand my expertise and stay at the forefront of technological advancements.
                </p>
              </div>
              <div className="text-left pt-8">
                <p className="text-3xl font-bold py-2">COLLEGE</p> 
                <p className="pb-8 font-semibold">Fordham College at Rosehill, 2021</p>
                <p className="text-3xl font-bold py-2">DEGREE</p>
                <p className="pb-8 font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-3xl font-bold py-2">GPA</p>
                <p className="pb-8 font-semibold">3.7</p>
              </div>
            </>
          )}
          {activePanel === 'collaboration' && (
            <>
              <div>
                <h2 className="text-5xl font-bold mb-4">TEAMWORK</h2>
                <p className="text-xl">
                  I thrive in collaborative settings, valuing teamwork and communication as essential elements of success. My approach is driven by a commitment to continuous improvement, both in my professional capabilities and as an individual. I am passionate about embracing new challenges and opportunities to enhance my skill set and contribute meaningfully to the tech community.
                </p>
              </div>
              <div className="text-left pt-8">
                <p className="text-3xl font-bold py-2">EXPERIENCE</p> 
                <p className="pb-8 font-semibold">Professionally working since 2017</p>
                <p className="text-3xl font-bold py-2">TEAMS</p>
                <div className="flex flex-col">
                  <p className="pb-2 font-semibold">TCC Entertainment</p>
                  <p className="pb-2 font-semibold">Tapped</p>
                  <p className="pb-2 font-semibold">LS Technologies</p>
                  <p className="pb-2 font-semibold">EnterLinked</p>
                </div>
              </div>
            </>
          )}
          {activePanel === 'socials' && (
            <>
              <div>
                <h2 className="text-5xl font-bold mb-4">SOCIALS</h2>
                <p className="text-xl">
                  Let&apos;s connect and explore how we can innovate and grow together in the ever-evolving landscape of technology!
                </p>
              </div>
              <div className="flex justify-between items-center pt-32 px-16 pb-16 space-x-8">
                <a href="https://github.com/ArmaanJH" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-5xl hover:text-gray-400" />
                </a>
                <a href="https://linkedin.com/in/armaan-hossain" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-5xl hover:text-blue-400" />
                </a>
                <a href="https://instagram.com/armaanhossain_" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill className="text-5xl hover:text-pink-300" />
                </a>
              </div>
            </>
          )}
        </motion.div>
      </main>
    </>
  );
}