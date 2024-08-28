'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Work() {
  const workItems = [
    {
      title: "Tapped App Inc",
      role: "Developed a user-centric web app using NextJS and Firebase, architecting core infrastructure with advanced features like artist booking platforms and integrated payment systems.",
      result: "Successfully onboarded a significant number of artists through collaborative marketing strategies, contributing to notable user growth.",
      image: "/images/tapped.png",
      logo: "/images/tapped_reverse.png",
      url: "https://www.tapped.ai"
    },
    {
      title: "LS Technologies",
      role: "Led the development of key features using ReactJS and Python for the FAA tool, improving error handling and optimizing the SQL database for better data access and user experience.",
      result: "Reduced bugs during deployment by 67% and revitalized the CRRT tool's user interface, enhancing the overall product quality and user satisfaction.",
      image: "/images/ls_tech.png",
      logo: "/images/ls_logo.png",
      url: "https://lstechllc.com"
    },
    {
      title: "Tapped App Inc",
      role: "Provided vital support in team management and AI tool development, leveraging OpenAI and Stable Diffusion to create innovative features, including an AI-driven image generator.",
      result: "Influenced investment opportunities, drove organizational growth, and successfully launched four web applications integral to Tapped AI’s tool suite.",
      image: "/images/app_tapped_ai.png",
      logo: "/images/tapped_reverse.png",
      url: "https://app.tapped.ai/"
    },
    {
      title: "EnterLinked",
      role: "Founded and led the development of a social entertainment media ranking app with React Native and Tailwind CSS, optimizing system design for efficiency and user experience.",
      result: "Achieved low operational costs and instantaneous load times while delivering a user-friendly and aesthetically pleasing app interface based on user feedback.",
      image: "/images/enterlinked_1.png",
      logo: "/images/enterlinked_logo.png",
      url: "https://enterlinked.app"
    },
    {
      title: "Afrozaa Jamil কংকা",
      role: "Developed a visually engaging website using HTML/CSS and Bootstrap, designed to showcase a combination of visual arts and poetry in an online gallery format.",
      result: "Successfully highlighted the artist's work by adhering to specific design themes and choices, creating an immersive gallery-like user experience.",
      image: "/images/aj_art.png",
      logo: "/images/aj_logo.png",
      url: "https://armaanjh.github.io/Afrozaa-Jamil-Art-Website/"
    },
  ];

  useEffect(() => {
    const button = document.getElementById('backToTopButton');
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      if (button) { // Add this null check
        if (window.scrollY > 200) {  // Adjust the scroll threshold as needed
          if (window.scrollY > lastScrollY) {
            button.classList.remove('show');
            button.classList.add('hide');
          } else {
            button.classList.remove('hide');
            button.classList.add('show');
          }
        } else {
          button.classList.remove('show');
          button.classList.add('hide');
        }
      }
      lastScrollY = window.scrollY;
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <ParallaxProvider>
      <main className="relative flex flex-col min-h-screen min-w-screen h-auto bg-gray-300 overflow-y-auto">
      <div className="absolute top-4 left-4 z-20">
        <button
          onClick={() => window.location.href = '/'}
          className="text-white p-2 rounded-full transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faHome} size="4x" />
        </button>
      </div>
        {/* Description and TOC Section */}
        <ParallaxBanner
          layers={[
            {
              children: (
                <div className="relative flex flex-col pt-28 w-[100vw] space-y-8 overflow-visible">
                  {/* Row 1 */}
                  <div className="flex items-start justify-start gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                  </div>
  
                  {/* Row 3 */}
                  <div className="flex items-end justify-end gap-4 sm:gap-8 md:gap-12 sm:animate-slide-sm md:animate-slide-md">
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                    <div className="w-[30vw] h-[30vw] sm:w-[30vh] sm:h-[30vh] min-w-[200px] min-h-[200px] bg-gray-900 blur-lg"></div>
                  </div>
                </div>
              ),
              speed: -10,
            },
          ]}
          className="h-screen"
        >
          
          <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
            {/* Left Side with Description */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <p className="text-xl text-center text-white font-bold">
                Below is my previous work as well as some explanations of my role in these projects. If you&apos;d like more detail, you can download my resume by clicking the button below.
              </p>
              <div className="mt-4">
                <button className="rounded-full border-gray-300 border-4 bg-gray-900 px-4 py-2 transition-transform transform hover:scale-105">
                  <p className="font-semibold text-white">DOWNLOAD</p>
                </button>
              </div>
            </div>
            {/* Table of Contents on the Right */}
            <div className="flex-1 flex items-center justify-center">
              <div className="p-6 h-[60vh] w-full max-w-xl flex flex-col justify-center text-center">
                <h2 className="text-8xl font-bold mb-4 text-white text-center w-full">
                  PROJECTS
                </h2>
                {/* Separator Line */}
                <div className="w-full border-b-4 border-gray-400 my-4"></div>
                <ul className="space-y-4">
                  {workItems.map((item, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => window.open(item.url, '_blank')}
                        className="text-white font-bold text-3xl p-2 transition-transform transform hover:scale-105"
                      >
                        {item.title.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </ParallaxBanner>
  
      {/* Work Sections with Shared Parallax Background */}
      <ParallaxBanner
        layers={[
          {
            image: '/images/parallaxbg.svg',
            speed: 100,
          },
        ]}
        className="h-auto bg-contain bg-center"
      >
        <div className="relative z-10 w-full bg-transparent flex flex-col space-y-16">
          {workItems.map((item, index) => (
            <section
              key={index}
              id={`section-${index}`}
              className={`flex flex-col md:flex-row min-h-screen items-center justify-between`}
            >
              <motion.div
                className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
                initial={{ x: index % 2 === 0 ? '-100%' : '100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 20, delay: 0 }}
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  layout="responsive" 
                  width={700} 
                  height={400} 
                  className={`shadow-lg object-cover ${index % 2 === 0 ? 'rounded-r-lg' : 'rounded-l-lg'}`} 
                />
              </motion.div>
              <motion.div
                className={`flex flex-col w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ zIndex: 10 }}
              >
                <motion.div
                  className="p-2 flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Image
                    src={`${item.logo}`}
                    alt={`${item.title} logo`}
                    width={250}
                    height={125}
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  className="font-medium text-gray-900 text-xl mt-4 p-4 text-white bg-black/15 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <h1 className="px-2 font-bold">Role: </h1>
                  <p className="p-2">{item.role}</p>
                  <h1 className="px-2 font-bold">Result: </h1>
                  <p className="p-2">{item.result}</p>
                </motion.div>
              </motion.div>
            </section>
          ))}
        </div>
      </ParallaxBanner>
      <button
        id="backToTopButton"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white p-3 rounded-full transition-transform duration-300 ease-in-out"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faAngleUp} size="5x" />
      </button>
    </main>
  </ParallaxProvider>
  );  
}
