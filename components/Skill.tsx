import * as React from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
export interface SkillProps {
  directionLeft?: boolean;
  img: StaticImageData;
}

export default function Skill({ directionLeft, img }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        src={img.src}
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0 md:w-28 md:h-28 xl:w-32 xl:h-32'>
        <div className='flex justify-center items-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}
