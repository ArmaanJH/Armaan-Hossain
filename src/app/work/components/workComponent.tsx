import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface WorkItemProps {
  item: {
    title: string;
    role: string;
    result: string;
    image: string;
    logo: string;
    url: string;
  };
  index: number;
  itemCount: number;
}

const WorkItem = ({ item, index, itemCount }: WorkItemProps) => {
  const { scrollYProgress } = useScroll();
  const start = index / itemCount;
  const end = (index + 0.75) / itemCount;

  // Determine the direction based on index
  const isEven = index % 2 === 0;
  const x = useTransform(scrollYProgress, [start, end], isEven ? ['-100%', '0%'] : ['100%', '0%']);

  return (
    <section
      id={`section-${index}`}
      className={`flex flex-col md:flex-row min-h-screen items-center justify-between`}
    >
      {/* Mobile Layout: Image below text */}
      <div className={`w-full md:w-1/2 p-6 ${isEven ? 'md:order-2' : 'md:order-1'} flex flex-col`}>
        <motion.div
          className="p-2 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
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
          transition={{ duration: 1.5 }}
        >
          <h1 className="px-2 font-bold">Role: </h1>
          <p className="p-2">{item.role}</p>
          <h1 className="px-2 font-bold">Result: </h1>
          <p className="p-2">{item.result}</p>
        </motion.div>

        {/* Mobile: Image appears below text */}
        <motion.div
          className="block md:hidden mt-4"
          style={{ x }}
        >
          <Image 
            src={item.image} 
            alt={item.title} 
            layout="responsive" 
            width={700} 
            height={400} 
            className="shadow-lg object-cover rounded-lg" 
          />
        </motion.div>
      </div>

      {/* Desktop Layout: Image side by side with text */}
      <motion.div
        className={`hidden md:block relative w-full md:w-1/2 ${isEven ? 'order-1' : 'order-2'}`}
        style={{ x }}
      >
        <Image 
          src={item.image} 
          alt={item.title} 
          layout="responsive" 
          width={700} 
          height={400} 
          className={`shadow-lg object-cover ${isEven ? 'rounded-r-lg' : 'rounded-l-lg'}`} 
        />
      </motion.div>
    </section>
  );
};

export default WorkItem;
