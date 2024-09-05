'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


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
      <main className="relative flex flex-row min-h-screen min-w-screen bg-gray-300 overflow-hidden">
        
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
        <div className="flex flex-col items-center justify-center w-1/2 h-full p-8 z-10">
          <div>
            <p className="text-4xl sm:text-6xl md:text-8xl text-center text-white font-bold leading-tight pb-12">ABOUT</p>
          </div>
          <div className="flex justify-center w-full h-auto">
            <Image
              src={'/images/profile.jpg'}
              alt={'Armaan Hossain Portrait'}
              width={365}
              height={300}
              className={'rounded-full border-gray-300 border-8'}
            />
          </div>
          <div className="text-2xl text-center">
            <p className="font-bold p-2">Front-end Technologies:</p> 
            <p>ReactJS, NextJS, React Native, JQuery, Tailwind CSS,</p>
            <p className="font-bold p-2">Back-end Technologies:</p>
            <p>NodeJS, ExpressJS, SQL, NoSQL DB, Django, GraphQL</p>
            <p className="font-bold p-2">Development and Collaboration Tools:</p>
            <p>NPM, Git, Docker, Jira, Expo Go, AWS, iOS, Figma, Stripe</p>
          </div>
        </div>

        {/* Right Side: Circles */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6 z-10">
          {/* Circles that trigger panels */}
          <div className="group w-40 h-40 rounded-full bg-gray-900 border-gray-300 border-4 text-white font-semibold text-center flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out" onClick={() => handleCircleClick('tech')}>
            Tech
          </div>
          <div className="group w-40 h-40 rounded-full bg-gray-900 border-gray-300 border-4 text-white font-semibold text-center flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out" onClick={() => handleCircleClick('education')}>
            Education
          </div>
          <div className="group w-40 h-40 rounded-full bg-gray-900 border-gray-300 border-4 text-white font-semibold text-center flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out" onClick={() => handleCircleClick('collaboration')}>
            Collaboration
          </div>
          <div className="group w-40 h-40 rounded-full bg-gray-900 border-gray-300 border-4 text-white font-semibold text-center flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out" onClick={() => handleCircleClick('socials')}>
            Socials
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
            <div>
              <h2 className="text-3xl font-bold mb-4">Tech</h2>
              <p>
                As a dedicated and passionate Software Engineer at LS Technologies, I specialize in leveraging ReactJS and Python within an Agile environment to deliver high-quality, innovative solutions. With a robust foundation in Computer Science and a keen understanding of Cybersecurity, I bring a unique blend of skills to the table, ensuring both functional and secure software development.
              </p>
            </div>
          )}
          {activePanel === 'education' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p>
                I hold a Bachelor of Science in Computer Science, which has equipped me with a comprehensive understanding of the core principles of computing. My professional journey is characterized by a relentless pursuit of growth and learning, always striving to expand my expertise and stay at the forefront of technological advancements.
              </p>
            </div>
          )}
          {activePanel === 'collaboration' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Collaboration</h2>
              <p>
                I thrive in collaborative settings, valuing teamwork and communication as essential elements of success. My approach is driven by a commitment to continuous improvement, both in my professional capabilities and as an individual. I am passionate about embracing new challenges and opportunities to enhance my skill set and contribute meaningfully to the tech community.
              </p>
            </div>
          )}
          {activePanel === 'socials' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Socials</h2>
              <p>
                Let&apos;s connect and explore how we can innovate and grow together in the ever-evolving landscape of technology!
              </p>
            </div>
          )}
        </motion.div>
      </main>
    </>
  );
}