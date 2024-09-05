type PanelTriggersProps = {
  handleCircleClick: (panelId: string) => void;
};

export default function PanelTriggers({ handleCircleClick }: PanelTriggersProps) {
  return (
    <div className="w-full flex flex-col items-center justify-evenly p-4 gap-6 z-10 md:w-1/2 md:items-end">
      <div
        className="text-white text-center text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105"
        onClick={() => handleCircleClick('tech')}
      >
        TECH
      </div>
      <div
        className="text-white text-center text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105"
        onClick={() => handleCircleClick('education')}
      >
        EDUCATION
      </div>
      <div
        className="text-white text-center text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105"
        onClick={() => handleCircleClick('collaboration')}
      >
        TEAMWORK
      </div>
      <div
        className="text-white text-center text-4xl sm:text-6xl md:text-7xl font-bold leading-tight transition-transform transform hover:scale-105"
        onClick={() => handleCircleClick('socials')}
      >
        SOCIALS
      </div>
    </div>
  );
}
