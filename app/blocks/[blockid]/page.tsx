import Link from 'next/link';
import TxRow from './txrow';
import styles from './page.module.css'

export default async function BlockDetail({
  params
}: {
  params: any,

}) {

  const { block, txs } = await getData(params.blockid);


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Block ID:
      </h1>
      <p style={{ overflowWrap: 'anywhere' }}>
        { params.blockid }
      </p>

      <h1 className={styles.title}>
        Transactions: ({block.tx_count < 25? block.tx_count : '25'} of {block.tx_count})
      </h1>

      <div className={styles.content}>
        <div className={styles.table1}>
          <div className={styles.tableRow} style={{ color: '#78838e'}}>

            <div className={styles.cell}>
              Tx id
            </div>

            <div className={styles.cell}>
              Amount
            </div>

          </div>

          { txs.map((tx: any, index: number) => (
            <TxRow key={tx.txid} tx={tx} index={index} />
          )) }
        </div>

      </div>

    </div>
  )

}

async function getData(blockId: string) {
  const res1 = await fetch(`https://blockstream.info/api/block/${blockId}`);
  const res2 = await fetch(`https://blockstream.info/api/block/${blockId}/txs`);
  if (!res1.ok || !res2.ok) {
    throw new Error('Failed to fetch data');
  }

  const res1data = await res1.json();
  const res2data = await res2.json();

  return {
    block: res1data,
    txs: res2data
  }
}


