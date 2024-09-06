import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from 'react-icons/ri';

type SlidingPanelProps = {
  activePanel: string | null;
  closePanel: () => void;
};

export default function SlidingPanel({ activePanel, closePanel }: SlidingPanelProps) {
  return (
    <AnimatePresence>
      {activePanel && (
        <motion.div
          className="fixed top-0 right-0 h-full bg-gray-900 border-l-4 border-gray-300 text-white p-8 w-full md:w-1/2 overflow-y-auto z-20 flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex justify-between items-center mb-16">
            <button className="text-white transition-transform transform hover:scale-105" onClick={closePanel}>
              <FontAwesomeIcon icon={faArrowRight} size="3x" />
            </button>
          </div>

          {activePanel === 'tech' && (
            <>
              <h2 className="text-5xl font-bold mb-4">TECH</h2>
              <p className="text-xl">
                As a dedicated and passionate Software Engineer at LS Technologies, I specialize in leveraging ReactJS and Python within an Agile environment to deliver high-quality, innovative solutions. With a robust foundation in Computer Science and a keen understanding of Cybersecurity, I bring a unique blend of skills to the table, ensuring both functional and secure software development.
              </p>
              <div className="text-left pt-8">
                <p className="text-3xl font-bold py-2">FRONT-END TECHNOLOGIES</p> 
                <p className="pb-8 font-semibold">ReactJS, NextJS, React Native, JQuery, Tailwind CSS,</p>
                <p className="text-3xl font-bold py-2">BACK-END TECHNOLOGIES</p>
                <p className="pb-8 font-semibold">NodeJS, ExpressJS, SQL, NoSQL DB, Django, GraphQL</p>
                <p className="text-3xl font-bold py-2">DEVELOPMENT TOOLS</p>
                <p className="pb-8 font-semibold">NPM, Git, Docker, Jira, Expo Go, AWS, iOS, Figma, Stripe</p>
                <p className="text-3xl font-bold py-2">CLEARANCE</p>
                <p className="pb-8 font-semibold">Public Trust</p>

              </div>
            </>
          )}
          {activePanel === 'education' && (
            <>
              <h2 className="text-5xl font-bold mb-4">EDUCATION</h2>
              <p className="text-xl">
                I hold a Bachelor of Science in Computer Science, which has equipped me with a comprehensive understanding of the core principles of computing. My professional journey is characterized by a relentless pursuit of growth and learning, always striving to expand my expertise and stay at the forefront of technological advancements.
              </p>
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
              <h2 className="text-5xl font-bold mb-4">TEAMWORK</h2>
              <p className="text-xl">
                I thrive in collaborative settings, valuing teamwork and communication as essential elements of success. My approach is driven by a commitment to continuous improvement, both in my professional capabilities and as an individual. I am passionate about embracing new challenges and opportunities to enhance my skill set and contribute meaningfully to the tech community.
              </p>
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
              <h2 className="text-5xl font-bold mb-4">SOCIALS</h2>
              <p className="text-xl">
                Let&apos;s connect and explore how we can innovate and grow together in the ever-evolving landscape of technology!
              </p>
              <div className="flex justify-between items-center pt-32 px-16 pb-16 space-x-8">
                <a href="https://github.com/ArmaanJH" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-5xl hover:text-gray-400 transition-transform transform hover:scale-105" />
                </a>
                <a href="https://linkedin.com/in/armaan-hossain" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-5xl hover:text-blue-400 transition-transform transform hover:scale-105" />
                </a>
                <a href="https://instagram.com/armaanhossain_" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill className="text-5xl hover:text-pink-300 transition-transform transform hover:scale-105" />
                </a>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
