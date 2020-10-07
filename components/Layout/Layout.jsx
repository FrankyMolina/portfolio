import { useRef, useState, useEffect } from 'react';

import Head from 'next/head';

import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollTopBtn from '../ScrollTopBtn';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const [layoutState, setLayoutState] = useState(0);
  const navBarRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    setLayoutState(window.scrollY);
  }

  function scrollToZero() {
    setLayoutState(0);
  }

  return (
    <div className={styles.wholePage}>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar navRef={navBarRef} />

        <main>{children}</main>

        {layoutState > 80 ? (
          <ScrollTopBtn DOMElemt={navBarRef} resetScroll={scrollToZero} />
        ) : null}

        <Footer />
      </div>
    </div>
  );
}
