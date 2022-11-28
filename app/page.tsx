import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: 'red' }}>Bull Bitcoin</span>
        </h1>

        <div className={styles.grid}>
          <Link href='/blocks' className={styles.card}>
            <h2>Blocks &rarr;</h2>
            <p> Explore the latest blocks </p>
          </Link>

          <Link href='/txns' className={styles.card}>
            <h2>Txns &rarr;</h2>
            <p> Checkout transactions </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
