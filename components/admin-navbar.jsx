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
                      <Link href="/admin/dashboard">Dashboard</Link>
                  </li> 
                  <li>
                      <Link href="/admin/media">Media</Link>
                  </li>                                    
                  <li>
                      <Link href="/admin/posts">Posts</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </header>
    )
}