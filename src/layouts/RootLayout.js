import { Outlet, NavLink } from 'react-router-dom'
import './RootLayout.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function RootLayout () {
  return (
    <div className='RootLayout'>
      <Navbar />

      <div className='container'>
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}
