import Link from 'next/link';
import Header from './header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />

        {children}

        <footer className='footer'>
          <Link href="/">
            Powered by{' '}
            <span className='logo'>
              Bull Bitcoin
            </span>
          </Link>
        </footer>
      </body>
    </html>
  )
}
