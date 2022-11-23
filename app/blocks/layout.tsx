import Link from 'next/link';

import BlockRow from './blockrow';
import styles from './page.module.css';

export default async function Blocks({
  children,
}: {
  children: React.ReactNode
}) {

  const blocks = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Latest Blocks
        </h1>
        <div className={styles.content}>
          <div className={styles.table1}>
            <div className={styles.tableRow} style={{ color: '#78838e'}}>

              <div className={styles.cell}>
                Height
              </div>

              <div className={styles.cell}>
                Timestamp
              </div>

            </div>

            { blocks.map((block: any, index: number) => (
              <BlockRow key={block.id} block={block} index={index} />
            )) }
          </div>

          <div className={styles.table2} style={{ textAlign: 'center' }}>
            { children }
          </div>

        </div>

      </main>

    </div>
  )

  /*
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
              <Link href={`blocks/${block.height.toString()}`} style={{ color: 'red' }}>
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

        { children }
        
      </div>

    </div>

  )
   */
}

async function getData() {
  const res = await fetch('https://blockstream.info/api/blocks');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

