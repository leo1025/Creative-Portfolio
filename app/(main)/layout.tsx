import Navbar from '../../components/server/navbar'
import Legal from '../../components/server/legal'
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
        <body>
          <Navbar />
          {children}
          <Legal />
        </body>
      </html>
    )
  }