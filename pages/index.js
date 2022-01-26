import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debbie Dann Digital</title>
        <meta name="description" content="Debbie Dann frontend developer projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>Hello, this is the content.</section>
      </main>

    </div>
  )
}
