'use client';

import { usePathname } from 'next/navigation';
import styles from './header.module.css'
import Logo from './logo'
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className={styles.titleBar}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <nav className={styles.linkSection}>
          <Link className={`${styles.navItem} ${pathname == '/' ? styles.active: null}`} href='/'>Dashboard</Link>
          <Link className={`${styles.navItem} ${pathname == '/blocks' ? styles.active: null}`} href='/blocks'>Blocks</Link>
          <Link className={`${styles.navItem} ${pathname == '/txns' ? styles.active: null}`} href='/txns'>Transactions</Link>
        </nav>

        <form className={styles.searchContainer}>

          <input type='search' className={styles.searchInput} placeholder='Search for block height' />
        </form>
      </div>

    </header>
  )
}
