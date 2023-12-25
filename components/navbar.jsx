import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
    return (
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
                      <Link href="/browse">Browse</Link>
                  </li>                                    
                  <li>
                      <Link href="/portfolio">Portfolio</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </header>
    )
}