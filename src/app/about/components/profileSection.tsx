import Image from 'next/image';

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-start w-full md:w-1/2 h-auto p-6 md:p-8 z-10">
      {/* "About" Title */}
      <div className="w-full text-left md:pl-0">
        <p className="text-4xl sm:text-6xl md:text-8xl text-left md:text-center text-white font-bold leading-tight pb-4 md:pb-12">
          ABOUT
        </p>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center w-full h-auto">
        <Image
          src={'/images/profile.jpg'}
          alt={'Armaan Hossain Portrait'}
          width={300}
          height={300}
          className={'rounded-xl border-white border-8 md:w-[500px] md:h-[500px]'}
        />
      </div>
    </div>
  );
}

