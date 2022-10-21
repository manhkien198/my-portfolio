import Link from 'next/link';

export default function NotFound() {
  const src = 'https://media.flaticon.com/dist/min/img/video/rex/video.mp4';
  return (
    <div className='w-80 h-80 flex flex-col justify-center items-center m-auto gap-4 mt-10'>
      <video className='not-found' autoPlay>
        <source src={src} type='video/mp4' />
      </video>
      <p className='text-4xl mt-4 text-center'>Not Found</p>
      <button className='m-auto text-center border-b'>
        <Link href='/' passHref>
          Back to Home
        </Link>
      </button>
    </div>
  );
}
