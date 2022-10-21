import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Avt from 'public/kienpm.jpg';
import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hi,The name's Kien`,
      'Guy-who-loves-coffee.tsx',
      '<ButLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img
        src={Avt.src}
        width={128}
        height={128}
        alt='avatar'
        className='relative rounded-full mx-auto object-cover'
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Frontend Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span
            className={`mr-3 ${
              theme == 'light' ? 'text-gray-500' : 'text-white'
            }`}
          >
            {text}
          </span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
      <div className='pt-5 z-20'>
        <Link href='#about'>
          <button
            className={`heroButton ${
              theme == 'light' ? 'border-[#fff]' : 'border-[#363537]'
            }`}
          >
            About
          </button>
        </Link>
        <Link href='#experience'>
          <button
            className={`heroButton ${
              theme == 'light' ? 'border-[#fff]' : 'border-[#363537]'
            }`}
          >
            Experience
          </button>
        </Link>
        <Link href='#skills'>
          <button
            className={`heroButton ${
              theme == 'light' ? 'border-[#fff]' : 'border-[#363537]'
            }`}
          >
            Skills
          </button>
        </Link>
      </div>
    </div>
  );
}
