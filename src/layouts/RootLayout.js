import { Outlet, NavLink } from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function RootLayout () {
  return (
    <div className='RootLayout'>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
