import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.wholePage}>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />

        <span>
          Sunt commodo irure deserunt cupidatat est. Aute tempor mollit officia
          enim culpa ea dolor Lorem et consequat duis duis velit aute. Enim
          labore sint enim adipisicing aliquip magna tempor cillum id incididunt
          ut eiusmod proident. Ex proident esse Lorem et deserunt Lorem irure eu
          quis minim velit. Tempor laborum reprehenderit non aute aliqua sint ad
          excepteur dolor minim.
        </span>

        <Footer />
      </div>
    </div>
  );
}
