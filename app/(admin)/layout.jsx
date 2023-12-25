import AdminNavBar from '../../components/admin-navbar'
import Legal from '../../components/legal'
import '../../styling/globals.css'

export const metadata = {
    title: 'Admin Panel',
    description: '',
  }

export default function AdminLayout({
    children,
  }) {
    return (
      <html lang='en'>
        <AdminNavBar />
        {children}
        <Legal />
      </html>
    )
  }