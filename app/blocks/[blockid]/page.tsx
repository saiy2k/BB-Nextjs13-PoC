import Link from 'next/link';
import TxRow from './txrow';

export default async function BlockDetail({
  params
}: {
  params: any,

}) {

  const { block, txs } = await getData(params.blockid);


  return (
    <div style={{ textAlign: 'left' }}>
      <h1 style={{ textAlign: 'left',  fontSize: '1.2rem', margin: '0px', padding: '0px' }} >
        Block ID:
      </h1>
      <p style={{ overflowWrap: 'anywhere' }}>
        { params.blockid }
      </p>

      <h1 style={{ textAlign: 'left',  fontSize: '1.2rem', margin: '0px', padding: '0px'}} >
        Transactions: ({block.tx_count < 25? block.tx_count : '25'} of {block.tx_count})
      </h1>

      <div style={{ display: 'flex', justifyContent: 'space-between'}} >
        <div style={{ color: 'white', flex: '1 50%' }}>
          <div style={{ padding: '20px 30px', borderBottom: '1px #2d2f39 solid', color: '#78838e'}}>

            <div style={{display: 'inline-block'}}>
              Tx id
            </div>

            <div style={{display: 'inline-block'}}>
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


