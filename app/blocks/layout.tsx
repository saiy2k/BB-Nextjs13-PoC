import Link from 'next/link';
import styles from './page.module.css'

export default async function Blocks({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Latest Blocks
        </h1>
        {children}

      </main>

    </div>
  )
}

