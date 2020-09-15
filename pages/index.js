import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Footer />
    </div>
  );
}
