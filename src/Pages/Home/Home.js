import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from './Landing/Landing'
import Projects from './Projects/Projects'
import Footer from '../../Components/Footer/Footer'

export default function Home () {
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
