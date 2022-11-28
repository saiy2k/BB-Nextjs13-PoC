'use client';

import styles from './style.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function BlockRow({
  block, index
}: {
  block: any, index: number
}) {

  const [expand, setExpand] = useState(false);

  const toggleDetail = () => {
    setExpand(!expand);
  }

  return (
    <>
      <div className={styles.tableRow}>

        <div className={styles.cell}>
          <Link href={`blocks/${block.id.toString()}`} style={{ color: 'red' }}>
            { block.height }
          </Link>
        </div>

        <div className={styles.cell}>
          { new Date(block.timestamp * 1000).toLocaleString() }
        </div>

        <div className={[styles.cell, styles.button].join(' ')} onClick={(e) => toggleDetail()}>
          { expand ? 'collapse' : 'expand' }
        </div>

      </div>

      {expand ?
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

      </table>: null }
    </>
  );

}
