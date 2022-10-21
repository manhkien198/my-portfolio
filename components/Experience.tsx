import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import Ts from 'assets/images/typescript.png';
import Css from 'assets/images/css.png';
import Html from 'assets/images/html.png';
import React from 'assets/images/react.png';
import Next from 'assets/images/nextjs.png';
export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20'>
        <ExperienceCard
          thumnail={React}
          imgs={[Html, Css, React, Ts]}
          title='HR Tool'
          company='Hivetech'
          desc={[
            'Teamsize: 6',
            'Position :Front-end developer',
            `Mission: build dashboard interface, handle requests of candidates,apply for jobs,handle the company's recruitment plan`,
          ]}
        />
        <ExperienceCard
          thumnail={React}
          imgs={[Html, Css, React, Ts]}
          title='DISC'
          company='Hivetech'
          desc={[
            'Teamsize: 2',
            'Position :Front-end developer',
            'Mission: build all the app in client side,fix bug and maintain',
          ]}
        />
        <ExperienceCard
          thumnail={React}
          imgs={[Html, Css, React, Ts]}
          title='RM Hubs'
          company='Hivetech'
          desc={[
            'Teamsize: 2',
            'Position :Front-end developer',
            'Mission: write unit test,some supplement for interface, fix bug',
          ]}
        />
        <ExperienceCard
          thumnail={Next}
          imgs={[Html, Css, Next, Ts]}
          title='Heyo Trip'
          company='Xproz'
          desc={[
            'Teamsize: 16',
            'Position :Front-end developer',
            'Mission: build custom flight in vietjet, add some feature to hotel and flight page, fix bug',
          ]}
        />
      </div>
    </motion.div>
  );
}
