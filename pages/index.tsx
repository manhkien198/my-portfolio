import About from 'components/About';
import Experience from 'components/Experience';
import Hero from 'components/Hero';
import Skills from 'components/Skiills';
import type { GetServerSideProps, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='text-white snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Kien&lsquo;s Portfolio</title>
        <meta name='title' content="Kien's Portfolio" />
        <meta
          name='description'
          content='His Name is Pham Manh Kien, He is Front-end developer and this is his portfolio'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://metatags.io/' />
        <meta property='og:title' content="Kien's Portfolio" />
        <meta
          property='og:description'
          content='His Name is Pham Manh Kien, He is Front-end developer and this is his portfolio'
        />
        <meta
          property='og:image'
          content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://metatags.io/' />
        <meta property='twitter:title' content="Kien's Portfolio" />
        <meta
          property='twitter:description'
          content='His Name is Pham Manh Kien, He is Front-end developer and this is his portfolio'
        />
        <meta
          property='twitter:image'
          content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
        />
      </Head>
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='experience' className='start-center'>
        <Experience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
    </div>
  );
};

export default Home;
export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
