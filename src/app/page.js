import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon
        </h1>
        <p className={styles.description}>
          Our website is under construction. Stay tuned for something amazing!
        </p>
        <p className={styles.description}>
          In the meantime, check out our <a href="/blog">Blog</a>!
        </p>
      </main>
    </div>
  );
}
