'use client';

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
      <div style={{ padding: '10px 0px', borderBottom: '1px #2d2f39 solid' }} >

        <div style={{ display: 'inline-block' }}>
          <Link href={`/txns`} style={{ color: 'red' }}>
            { tx.txid.substring(0, 30) }...
          </Link>
        </div>

        <div style={{ display: 'inline-block' }}>
          { tx.vout.reduce((acc: number, curr: any) => acc + curr.value, 0)  } sats
        </div>

      </div>
      
    </>
  );

}
