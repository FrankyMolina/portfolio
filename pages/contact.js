import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';

import styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactInfo customClass={styles.contactPage}/>
      <Footer />
    </div>
  );
}
