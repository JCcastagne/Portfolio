import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from './Landing/Landing'
import Projects from './Projects/Projects'
import Footer from '../../Components/Footer/Footer'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div class='Home'>
      <div className='container'>
        <Navbar />
        <Landing />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
