import Navbar from '../../components/navbar'
import Legal from '../../components/legal'
import '../../styling/globals.css'

export const metadata = {
    title: 'Leona DA',
    description: '',
  }

export default function MainLayout({
    children,
  }) {
    return (
      <html lang='en'>
        <Navbar />
        {children}
        <Legal />
      </html>
    )
  }