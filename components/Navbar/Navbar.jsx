import Link from 'next/link';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarTop}>
        <div>
          <Link href="#">
            <a>LNG</a>
          </Link>
        </div>

        <div>
          <button onClick={() => console.log('hello')}>🌒</button>
        </div>
      </div>

      <div className={styles.navbarBottom}>
        <div>
          <Link href="/">
            <a>
              <img src="/logo_transparent.png" alt="Franky Molina's logo" />
            </a>
          </Link>
        </div>

        <div>
          <Link href="/projects">
            <a>Proyectos</a>
          </Link>
        </div>

        <div>
          <span>Contacto</span>
        </div>
      </div>
    </div>
  );
}
