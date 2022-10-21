import Bear from 'assets/images/bear.jpeg';
import { motion } from 'framer-motion';
export default function About() {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');
  const color = theme == 'dark' ? 'text-white' : 'text-gray-500';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        src={Bear.src}
        alt='Bear'
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='lg:-mb-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className={`text-4xl font-semibold ${color}`}>
          Here is a{' '}
          <span className='underline  decoration-[#F7BA0A]/50'>little</span>{' '}
          background
        </h4>
        <p className={`text-base ${color}`}>
          I&#39;m Kien. I&#39;m a Front-end developer with 1.5 experienced
          years. With my fondness for learning i expect to learn more about this
          career
        </p>
      </div>
    </motion.div>
  );
}
