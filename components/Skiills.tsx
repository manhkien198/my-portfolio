import { motion } from 'framer-motion';
import Skill from './Skill';
import Html from 'assets/images/html.png';
import Css from 'assets/images/css.png';
import Next from 'assets/images/nextjs.png';
import Ts from 'assets/images/typescript.png';
import Mongo from 'assets/images/mongo.png';
import Git from 'assets/images/merge.png';
import Node from 'assets/images/node-js.png';
import Vs from 'assets/images/vs.png';
import React from 'assets/images/React.png';
import Angular from 'assets/images/angular.png';
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col justify-center xl:space-y-0 mx-auto items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for currency profieciency
      </h3>
      <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-2'>
        <Skill img={Html} directionLeft />
        <Skill img={Css} directionLeft />
        <Skill img={Ts} directionLeft />
        <Skill img={React} directionLeft />
        <Skill img={Next} />
        <Skill img={Vs} />
        <Skill img={Node} />
        <Skill img={Git} />
        <Skill img={Mongo} directionLeft />
        <Skill img={Angular} directionLeft />
      </div>
    </motion.div>
  );
}
