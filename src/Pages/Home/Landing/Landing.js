import './Landing.css'

import { Link } from 'react-router-dom'

import name_hero_light from '../../../img/name_hero_light.svg'
import lastName_hero_light from '../../../img/lastName_hero_light.svg'
import server_light from '../../../img/icons/server_light.svg'
import laptop_light from '../../../img/icons/laptop_light.svg'
import design_light from '../../../img/icons/design_light.svg'

export default function Landing () {
  return (
    <header class='Landing'>
      <div className='name'>
        <img src={name_hero_light} alt='Jean-Christophe' />
        <img src={lastName_hero_light} alt='Castagne' />
      </div>

      <div className='skills'>
        <div>
          <img src={server_light} alt='Backend icon' />
          <h1>Backend</h1>
        </div>
        <span></span>
        <div>
          <img src={laptop_light} alt='Frontend icon' />
          <h2>Frontend</h2>
        </div>
        <span></span>
        <div>
          <img src={design_light} alt='Design icon' />
          <h3>Design</h3>
        </div>
      </div>
      <p>
        Previously at <Link to='/work'>Applauz</Link> and{' '}
        <Link to='/work'>Vuzec</Link>
      </p>
    </header>
  )
}
