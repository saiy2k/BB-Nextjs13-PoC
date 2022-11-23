import Link from 'next/link';
import styles from './page.module.css'

export default async function Blocks() {

  const blocks = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Latest Blocks
        </h1>
        <div className={styles.table}>
          <div className={styles.tableHeader}>

            <div className={styles.cell}>
              Height
            </div>

            <div className={styles.cell}>
              Timestamp
            </div>

          </div>

          { blocks.map((block: any) => (
            <div key={block.id} className={styles.tableHeader}>

              <div className={styles.cell}>
                { block.height }
              </div>

              <div className={styles.cell}>
                { block.timestamp }
              </div>

            </div>
          )) }
        </div>

      </main>

    </div>
  )
}

async function getData() {
  const res = await fetch('https://blockstream.info/api/blocks');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
