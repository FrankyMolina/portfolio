import Head from 'next/head';

import Navbar from '../Navbar';
import Footer from '../Footer';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.wholePage}>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
