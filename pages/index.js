import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Franky Molina Dev.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="Main">
        <Navbar />
        <h1>hello world!</h1>
      </div>
    </div>
  );
}
