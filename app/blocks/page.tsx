import Link from 'next/link';
import styles from './page.module.css'

export default async function Blocks() {

  const blocks = await getData();

  return (
    <div className={styles.content}>
      <div className={styles.table}>
        <div className={styles.tableRow} style={{ color: '#78838e'}}>

          <div className={styles.cell}>
            Height
          </div>

          <div className={styles.cell}>
            Timestamp
          </div>

        </div>

        { blocks.map((block: any) => (
          <div key={block.id} className={styles.tableRow}>

            <div className={styles.cell}>
              <Link href={`blocks/${block.height.toString()}`}>
                { block.height }
              </Link>
            </div>

            <div className={styles.cell}>
              { new Date(block.timestamp * 1000).toLocaleString() }
            </div>

          </div>
        )) }
      </div>

      <div className={styles.table}>
        <div className={styles.tableRow} style={{ color: '#78838e'}}>

          <div className={styles.cell}>
            Height
          </div>

          <div className={styles.cell}>
            Timestamp
          </div>

        </div>

        { blocks.map((block: any) => (
          <div key={block.id} className={styles.tableRow}>

            <div className={styles.cell}>
              { block.height }
            </div>

            <div className={styles.cell}>
              { block.timestamp }
            </div>

          </div>
        )) }
      </div>

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
