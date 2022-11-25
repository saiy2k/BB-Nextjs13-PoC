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

          <div className={styles.table2} style={{ textAlign: 'center', marginTop: '48px' }}>
            { children }
          </div>

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

