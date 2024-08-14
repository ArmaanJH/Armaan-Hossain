import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row min-h-screen min-w-screen h-screen p-6 md:p-24 bg-gray-300 overflow-hidden">
      {/* Moving Squares */}
      <div className="absolute inset-0 flex items-start justify-start space-x-[2vw] animate-slide">
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
      </div>

      <div className="absolute inset-0 flex items-end justify-end space-x-[2vw] animate-slide">
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center space-x-[2vw] animate-slide">
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
        <div className="w-[20vw] h-[20vw] bg-gray-900 blur-lg"></div>
      </div>

      {/* Left Side */}
      <div className="flex flex-col items-start justify-start h-full w-full md:w-1/2 z-10">
        <div>
          <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold">ARMAAN</p>
          <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold">JAMIL</p>
          <p className="text-4xl sm:text-6xl md:text-8xl text-white font-bold">HOSSAIN</p>
        </div>
        <div className="flex flex-col items-start justify-end h-full mt-4 md:mt-0">
          <p className="text-lg sm:text-xl md:text-2xl text-white">
            A software engineer who leverages ReactJS, Python, and a strong
            foundation in Computer Science and Cybersecurity to deliver secure,
            high-quality solutions within Agile teams, driven by continuous
            learning, innovation, and a passion for collaboration.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center md:items-end justify-evenly w-full md:w-1/2 h-full pb-10 pt-10 z-10">
        <div className="w-full">
          <Link href="/work">
            <p className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold">WORK</p>
          </Link>
        </div>
        <div className="w-full mt-4">
          <Link href="/about">
            <p className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold">ABOUT</p>
          </Link>
        </div>
        <div className="w-full mt-4">
          <p className="text-white text-center md:text-right text-4xl sm:text-6xl md:text-7xl font-bold">CONTACT ME</p>
        </div>
      </div>
    </main>
  );
}
