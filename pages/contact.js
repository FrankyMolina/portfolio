import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';

import styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <Layout>
      <ContactInfo customClass={styles.contactPage} />
    </Layout>
  );
}
