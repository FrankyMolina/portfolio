import ContactInfo from '../ContactInfo';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ContactInfo />

      <div className={styles.copy}>
        <span>Franky Molina Developer © 2020.</span>
      </div>
    </div>
  );
}
