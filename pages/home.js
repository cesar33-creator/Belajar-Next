import Head from 'next/head';
import Navbar from './components/Navbar';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next JS" width={100} height={100} />
      <h1>Ini Halaman Home</h1>
    </>
  );
};

export default Home;
