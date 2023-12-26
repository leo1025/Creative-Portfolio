import AdminNavBar from '../../components/admin-navbar'
import Legal from '../../components/legal'
import '../globals.css'

export const metadata = {
    title: 'Admin Panel',
    description: '',
  }

export default function AdminLayout({
    children,
  }) {
    return (
      <html lang='en'>
        <body>
          <AdminNavBar />
          {children}
          <Legal />
        </body>
      </html>
    )
  }