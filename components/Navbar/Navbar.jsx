import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import ScrollTopBtn from '../ScrollTopBtn';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(0);
  const navBarRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    setNavbarState(window.scrollY);
  }

  function scrollToZero() {
    setNavbarState(0);
  }

  return (
    <>
      <div className={styles.navbarMain} ref={navBarRef}>
        <div className={styles.homeButton}>
          <Link href="/">
            <a>
              <img src="/FM Dev.svg" alt="Franky Molina's logo" />
              <h1>Franky Molina Dev.</h1>
            </a>
          </Link>
        </div>
        <div className={styles.navbarButtonContainer}>
          <div className={styles.navButtons}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>

          <div className={styles.navButtons}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>

      {navbarState > 80 ? (
        <ScrollTopBtn DOMElemt={navBarRef} resetScroll={scrollToZero} />
      ) : null}
    </>
  );
}
