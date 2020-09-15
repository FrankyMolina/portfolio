import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <div>
          <p>
            <a
              href="https://www.linkedin.com/in/franciscojaviermolinatorrejon/"
              target="_blank"
            >
              LinkdIn
            </a>
          </p>
        </div>
        <div>
          <p>
            <a href="mailto:fjmolinatorrejon@gmail.com">Gmail</a>
          </p>
        </div>
        <div>
          <p>
            <a href="https://github.com/FrankyMolina" target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </div>

      <div className={styles.copy}>
        <span>Franky Molina Developer © 2020.</span>
      </div>
    </div>
  );
}
