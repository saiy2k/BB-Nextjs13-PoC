import Link from 'next/link';

import BlockRow from './blockrow';

export default async function Blocks({
  children,
}: {
  children: React.ReactNode
}) {

  const blocks = await getData();

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>
          Latest Blocks
        </h1>
        <div className='content'>

          <div style={{ color: 'white', flex: '1 50%' }}>
            <div style={{ color: '#78838e', padding: '20px 30px', borderBottom: '1px #2d2f39 solid' }}>

              <div style={{width: '100px', display: 'inline-block' }}>
                Height
              </div>

              <div style={{width: '200px', display: 'inline-block' }}>
                Timestamp
              </div>

            </div>

            { blocks.map((block: any, index: number) => (
              <BlockRow key={block.id} block={block} index={index} />
            )) }
          </div>

          <div style={{  color: 'white', flex: '1 50%', textAlign: 'center', marginTop: '48px' }}>
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

