import Link from 'next/link'
import './navbar.css'

export default function AdminNavbar() {
    return (
        <header>
          <nav className='admin-navbar'>
            <div className='container'>
              <p>Admin Panel</p>
              <ul className='nav-list'>
                <li>
                      <Link href="/dashboard">Dashboard</Link>
                  </li> 
                  <li>
                      <Link href="/media">Media</Link>
                  </li>                                    
                  <li>
                      <Link href="/posts">Posts</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </header>
    )
}