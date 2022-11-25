'use client';

import styles from './page.module.css';
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

      { /* expand ?
      <table className={styles.tableRow} style={{ 'width': '100%', 'background': '#111316', 'border': '1px solid #2d2f39', 'borderTop': 'none', marginTop: '-15px' }}>
        <tr>
          <td> Height </td>
          <td> { block.height } </td>
        </tr>

        <tr>
          <td> Tx count </td>
          <td> { block.tx_count } </td>
        </tr>

        <tr>
          <td> Size </td>
          <td> { block.size/1000 }KB </td>
        </tr>

        <tr>
          <td> Weight </td>
          <td> { block.weight/1000 }KWU </td>
        </tr>

        <tr>
          <td> Id </td>
          <td style={{ overflowWrap: 'anywhere' }}> { block.id } </td>
        </tr>

        <tr>
          <td> Nonce </td>
          <td> { block.nonce } </td>
        </tr>

      </table>: null */ }
    </>
  );

}
