import LightMode from 'assets/images/brightness.png';
import DarkMode from 'assets/images/night-mode.png';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Pdf from 'assets/images/pdf.png';
import Link from 'next/link';
interface HeaderProps {
  toggleTheme: () => void;
  theme: string | undefined;
}
export default function Header({ toggleTheme, theme }: HeaderProps) {
  return (
    <header
      className={`flex justify-between py-2 px-6 sticky top-0 z-20 ${
        theme == 'light' ? 'bg-[rgba(0, 0, 0, 0.5)]' : ''
      }`}
    >
      <motion.div
        className='flex items-center'
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url='https://www.facebook.com/wblegend'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='mailto:email@gmail.com'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex justify-center items-center gap-5'
      >
        <button className='bg-transparent flex justify-center border-solid border-b rounded-3xl py-2 px-6'>
          <Link
            href='https://www.topcv.vn/xem-cv/BA8LU1cGAAsDVQZRVVYCU10HC1BVVgAECAoJWg2198'
            passHref
          >
            <Image src={Pdf} width={20} height={20} alt='Theme' />
          </Link>
        </button>
        <button
          onClick={toggleTheme}
          className='bg-transparent flex justify-center border-solid border-b rounded-3xl py-2 px-6'
        >
          <Image
            src={theme == 'light' ? DarkMode : LightMode}
            width={20}
            height={20}
            alt='Theme'
          />
        </button>
      </motion.div>
    </header>
  );
}
