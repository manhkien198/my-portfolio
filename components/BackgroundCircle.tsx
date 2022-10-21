import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircle({}: Props) {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');
  const border = theme == 'dark' ? 'b-black' : 'b-white';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex justify-center items-center'
    >
      <div
        className={`absolute border ${border} rounded-full w-[200px] h-[200px] mt-52 animate-ping`}
      ></div>
      <div
        className={`absolute border ${border} rounded-full w-[300px] h-[300px] mt-52 rounded-full`}
      ></div>
      <div
        className={`absolute border ${border} rounded-full w-[500px] h-[500px] mt-52 rounded-full`}
      ></div>
      <div className='absolute border border-[#F7AB0A] rounded-full w-[650px] h-[650px] mt-52 opacity-20 rounded-full animate-pulse'></div>
      <div
        className={`absolute border ${border} rounded-full w-[800px] h-[800px] mt-52 rounded-full`}
      ></div>
    </motion.div>
  );
}
