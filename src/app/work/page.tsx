'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function Work() {
  const workItems = [
    {
      title: "Tapped App Inc",
      text: "Built a user-centric companion web app using NextJS and FireBase, offering Tapped users a dynamic platform to elevate their entertainment careers. Architected core app infrastructure, including the design of advanced features like artist booking platforms and integrated payment systems and email automation. Collaborated on company marketing initiatives, leveraging guerrilla marketing strategies to attract and onboard artists, resulting in a notable user growth.",
      image: "/images/tapped.png"
    },
    {
      title: "LS Technologies",
      text: "Spearheaded the development of pivotal features using ReactJS and Python for the Federal Aviation Administration's tool, consistently adhering to Agile methodologies. Implemented a comprehensive error handling system across the website, significantly reducing bugs during product deployment by 67%  and ensuring rigorous testing and debugging of the codebase. Collaborated on the design and management of the SQL database, introducing efficient methods to access data and enhance user experience. Revitalized the user interface of the CRRT tool by integrating Tailwind CSS, resulting in a contemporary and visually appealing web application. Due to security reasons, visuals of this project cannot be shown.",
      image: "/images/ls_tech.png"
    },
    {
      title: "Tapped App Inc",
      text: "Transitioned to a contractual role, providing vital support to the Tapped team during weekends and peak periods. Assisted in team management and significantly influenced investment opportunities by leveraging an investor network and creating compelling demos, driving organizational growth and success. Contributed to the development of an AI-enhanced artist tool suite, leveraging OpenAI and Stable Diffusion, to empower users in their career progression. Developed an AI-driven image generator capable of transforming realtime user-provided images into thematic visuals, serving versatile purposes including album cover creation. Designed and launched four web applications integral to Tapped AI's tool suite, facilitating the implementation of a subscription payment model via Stripe.",
      image: "/images/app_tapped_ai.png"
    },
    {
      title: "EnterLinked",
      text: "Founded an app development organization focused on producing thoughtful, utility-based applications for daily use. Currently leading the creation of a social entertainment media ranking app with React Native, Tailwind CSS and Expo Go, enabling users to curate personalized lists of their favorite form of media. Pioneered system design, creating an optimized application structure that reduced costs to an average of $3 per month and achieved instantaneous load times. Conceptualized and executed a user-friendly and aesthetic app interface based on user feedback.",
      image: "/images/enterlinked_1.png"
    },
    {
      title: "Afrozaa Jamil Art",
      text: "Developed a website for the artist Afrozaa Jamil to demonstrate a combination of visual arts and poetry. This website was created using HTML/CSS and Bootstrap and is one of the first projectsI've worked on. the UI and UX was designed to induce the feeling of being in an online gallery to the user and incorporates gallery like design choices to highlight this. Adhered strictly to the customers desired themes and implemented these stylic choices to highlight the artists work.",
      image: "/images/aj_art.png"
    },
  ];

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.gradient-text');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <main className="relative flex flex-col min-h-screen min-w-screen h-auto bg-gray-300 overflow-y-auto">
        
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
          className="h-screen border-b-8 border-gray-900"
        >
          
        <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
          {/* Left Side with Description */}
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <p className="text-xl text-center text-white font-bold">
              Below is my previous work as well as some explanations of my role in these projects. If you&apos;d like more detail, you can download my resume by clicking the button below.
            </p>
            <div className="mt-4">
              <button className="rounded-full bg-gray-900 px-4 py-2">
                <p className="font-semibold">DOWNLOAD</p>
              </button>
            </div>
          </div>
          {/* Table of Contents on the Right */}
          <div className="flex-1 flex items-center justify-center">
            <div className="p-6 h-[60vh] w-full max-w-xl flex flex-col justify-center items-start text-left">
              <h2 className="text-5xl font-bold mb-4 text-white text-center w-full">PROJECTS</h2>
              <ul className="space-y-4">
                {workItems.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(index)} 
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
                <Image src={item.image} alt={item.title} layout="responsive" width={700} height={400} className={`shadow-lg object-cover ${index % 2 === 0 ? 'rounded-r-lg' : 'rounded-l-lg'}`} />
              </motion.div>
              <motion.div
                className={`flex flex-col w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ zIndex: 10 }}
              >
                <motion.h1
                  className={`text-4xl md:text-7xl p-2 ${index % 2 === 0 ? 'text-gray-900' : 'text-gray-900'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  className={`font-semibold text-gray-900 text-xl mt-4 p-4 ${index % 2 === 0 ? 'text-gray-900' : 'text-gray-900'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            </section>
          ))}
        </div>
      </ParallaxBanner>
    </main>
  </ParallaxProvider>
  );  
}
