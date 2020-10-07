import { useRef } from 'react';

import Head from 'next/head';

import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollTopBtn from '../ScrollTopBtn';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const navBarRef = useRef();

  return (
    <div className={styles.wholePage}>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar navRef={navBarRef} />

        <main>{children}</main>

        <ScrollTopBtn DOMElemt={navBarRef} />

        <Footer />
      </div>
    </div>
  );
}
