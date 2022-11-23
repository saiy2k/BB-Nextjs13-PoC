import Link from 'next/link';
import styles from './page.module.css'

export default function BlockDetail({params}: {params: any}) {

  return (
    <div>
      Block ID: { params.blockid }
    </div>
  )

}
