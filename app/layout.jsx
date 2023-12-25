import Link from 'next/link'
import './globals.css'

export const metadata = {
    title: 'Leona DA',
    description: '',
  }

export default function MainLayout({
    children,
  }) {
    return (
      <html lang='en'>
        <header>
          <nav className='navbar'>
            <div className='container'>
              <Link className='nav-brand' href="/">Leona DA</Link>
              <ul className='nav-list'>
                <li>
                      <Link href="/">Home</Link>
                  </li>
                  <li>
                      <Link href="/about">About</Link>
                  </li>
                  <li>
                      <Link href="/Media">Media</Link>
                  </li>                                    
                  <li>
                      <Link href="/portfolio">Portfolio</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer className='container'>
          <p>© 2024 Leona DA</p>
        </footer>
      </html>
    )
  }