import Link from 'next/link';
import styles from './page.module.css'

export default async function BlockDetail({
  children,
  params
}: {
  children: React.ReactNode,
  params: any,

}) {

  const txns = await getData(params.blockid);


  return (
    <div>
      Block ID: <br />
      { params.blockid }
      <br/>
      <br/>
      <br/>

      Transactions: <br />
      { txns.map((txn: any) => (
        <p> { txn.txid } </p>
      )) }
    </div>
  )

}

async function getData(blockId: string) {
  const res = await fetch(`https://blockstream.info/api/block/${blockId}/txs`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


