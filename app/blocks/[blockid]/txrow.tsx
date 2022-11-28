'use client';

import styles from './style.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function TxRow({
  tx, index
}: {
  tx: any, index: number
}) {

  const [expand, setExpand] = useState(false);

  const toggleDetail = () => {
    setExpand(!expand);
  }

  return (
    <>
      <div className={styles.tableRow}>

        <div className={styles.cell}>
          <Link href={`/txns`} style={{ color: 'red' }}>
            { tx.txid.substring(0, 30) }...
          </Link>
        </div>

        <div className={styles.cell}>
          { tx.vout.reduce((acc: number, curr: any) => acc + curr.value, 0)  } sats
        </div>

      </div>
      
    </>
  );

}
