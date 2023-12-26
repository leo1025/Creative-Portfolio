import Navbar from '../../components/navbar'
import Legal from '../../components/legal'
import '../globals.css'

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