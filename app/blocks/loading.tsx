
import styles from './page.module.css';
export default function Loading() {

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>
          Latest Blocks
        </h1>
        <div className='content'>
          Loading...
        </div>

      </main>

    </div>
  );

  /*
  return (
    <div style={{
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}> Loading blocks... </div>
  )
   */

}
