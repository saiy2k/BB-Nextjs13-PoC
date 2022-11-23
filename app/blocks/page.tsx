import Link from 'next/link';
import styles from './page.module.css'

export default function Blocks() {

  return (
    <div style={{
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      Select a transaction to see detail
    </div>
  )

}
