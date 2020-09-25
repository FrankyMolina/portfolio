import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyDescription from '../components/MyDescription';

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
        <MyDescription />
        <Footer />
      </div>
    </div>
  );
}
