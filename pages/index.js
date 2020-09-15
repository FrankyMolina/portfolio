import Link from 'next/link';

import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Link href="/esp">
          <a>ESP</a>
        </Link>

        <Link href="/en">
          <a>ENG</a>
        </Link>
      </div>
    </div>
  );
}
