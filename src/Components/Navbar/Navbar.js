import './Navbar.css'

import JC_logo_light from '../../img/JC_logo_light.svg'
import sort_light from '../../img/icons/sort_light.svg'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='Navbar'>
      <div className='container'>
        <Link to='/'>
          <img src={JC_logo_light} alt='JC brand logo' className='logo' />
        </Link>

        {/* <p>Resume</p> */}

        <button>
          <img src={sort_light} alt='menu' />
          Menu
        </button>
      </div>
    </div>
  )
}
