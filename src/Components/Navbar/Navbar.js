import './Navbar.css'

import JC_logo_black from '../../img/JC_logo_black.svg'
import sort_icon from '../../img/icons/sort.svg'

export default function Navbar () {
  return (
    <div class='Navbar'>
      <div className='container'>
        <title>
          <img src={JC_logo_black} alt='JC brand logo' />
          <p>Jean-Christophe Castagne</p>
        </title>

        <button>
          Menu
          <img src={sort_icon} alt='menu' />
        </button>
      </div>
    </div>
  )
}
