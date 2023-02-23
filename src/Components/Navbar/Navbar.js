import './Navbar.css'

import JC_logo_light from '../../img/JC_logo_light.svg'
import sort_light from '../../img/icons/sort_light.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar () {
  const [drawerActive, setDrawerActive] = useState('inactive')

  function toggleDrawer () {
    drawerActive === 'active'
      ? setDrawerActive('inactive')
      : setDrawerActive('active')
  }

  return (
    <div id='Navbar' className={drawerActive}>
      <div className='container'>
        <Link to='/'>
          <img src={JC_logo_light} alt='JC brand logo' className='logo' />
        </Link>

        {/* <p>Resume</p> */}

        <button onClick={() => toggleDrawer()}>
          <img src={sort_light} alt='menu' />
          Menu
        </button>
      </div>
      <div id='links'>
        <Link to='/'>Home</Link>
        <Link to='contact'>Contact</Link>
        <Link to='resume'>Resume</Link>
        <Link to='work'>Work</Link>
      </div>
    </div>
  )
}
