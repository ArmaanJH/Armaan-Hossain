'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion'; 

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
    <main className="relative flex flex-col min-h-screen min-w-screen h-auto p-6 md:px-16 md:pb-16 bg-gray-300 overflow-y-auto">
      
      {/* Top Section: Description and TOC */}
      <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
        
        {/* Left Side with Description */}
        <div className="flex-1 flex items-center justify-center p-6">
          <p className="text-xl text-center">
            Below is my previous work as well some explanations of my role in these projects. If you&apos;d like more detail, you can download my resume by clicking the button below.
          </p>
        </div>

        {/* Table of Contents on the Right */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg h-[60vh] w-full max-w-xl flex flex-col justify-center items-start text-left">
            <h2 className="text-xl font-bold mb-4 text-black text-center w-full">PROJECTS</h2>
            <ul className="space-y-4">
              {workItems.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(index)} 
                    className="text-black text-3xl p-2 transition-transform transform hover:scale-105"
                  >
                    {item.title.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Work Items Below */}
      <div className="w-full">
        {workItems.map((item, index) => (
          <motion.div
            key={index}
            id={`section-${index}`}
            className={`flex flex-col rounded-lg m-4 min-h-screen ${index % 2 === 0 ? 'items-start bg-gray-100' : 'items-end bg-gray-200'} p-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-full"
              initial={{ x: index % 2 === 0 ? '-100%' : '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            >
              <Image src={item.image} alt={item.title} layout="responsive" width={700} height={400} className="rounded-lg shadow-lg object-cover" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-7xl gradient-text p-2 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className={`font-semibold text-gray-900 text-xl mt-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {item.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
