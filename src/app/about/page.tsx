'use client';
import Head from 'next/head';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ProfileSection from './components/profileSection';
import PanelTriggers from './components/panelTriggers';
import SlidingPanel from './components/slidingPanel';

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
      <main className="relative flex md:flex-row flex-col min-h-screen min-w-screen bg-gray-300 md:p-20 p-6 pt-20 overflow-hidden">
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

        <ProfileSection />
        <PanelTriggers handleCircleClick={handleCircleClick} />
        <SlidingPanel activePanel={activePanel} closePanel={() => setActivePanel(null)} />
      </main>
    </>
  );
}
