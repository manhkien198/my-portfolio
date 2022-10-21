import Avt from 'assets/images/bear.jpeg';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { useId } from 'react';
type Props = {
  imgs: StaticImageData[];
  title: string;
  company: string;
  desc: string[];
  thumnail: StaticImageData;
};
export default function ExperienceCard({
  imgs,
  title,
  company,
  desc,
  thumnail,
}: Props) {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');
  const id = useId();
  return (
    <article
      className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center ${
        theme == 'dark' ? 'bg-[#292929]' : 'bg-[#a9a6a6]'
      } p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden`}
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={thumnail.src}
        alt='experience'
        className='w-36 h-32 xl:w-[230px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-2 my-4'>
          {imgs?.map((img: StaticImageData) => (
            <img
              key={id}
              src={img.src}
              alt='frame work'
              className='w-12 h-12'
            />
          ))}
        </div>
        <ul className='list-disc'>
          {desc.map((des) => (
            <li key={id}>
              <p className='uppercase text-gray-300'>{des}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
