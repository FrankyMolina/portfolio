import Link from 'next/link';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarMain}>
        <div>
          <Link href="/">
            <a>
              <img src="/logo_transparent.png" alt="Franky Molina's logo" />
            </a>
          </Link>
        </div>

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

        <div>
          <button onClick={() => console.log('hello')}>🌒</button>
        </div>
      </div>
    </div>
  );
}
