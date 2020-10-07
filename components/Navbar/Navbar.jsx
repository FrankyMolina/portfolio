import Link from 'next/link';

import styles from './Navbar.module.scss';

export default function Navbar({navRef}) {
  return (
    <div className={styles.navbarMain} ref={navRef}>
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
  );
}
