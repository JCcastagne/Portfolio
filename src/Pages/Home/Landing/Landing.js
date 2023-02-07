import './Landing.css'

import name_hero from '../../../img/name_hero.svg'
import lastName_hero from '../../../img/lastName_hero.svg'
import { Link } from 'react-router-dom'

export default function Landing () {
  return (
    <div class='Landing'>
      <header>
        <div className='name'>
          <div className='firstName'>
            <img src={name_hero} alt='Jean-Christophe' />
          </div>

          <div className='heroCard'></div>
          <div className='heroCard'></div>

          <div className='lastName'>
            <img src={lastName_hero} alt='Castagne' />
          </div>
        </div>
        <div className='skills'>
          <h1>Frontend & backend developer</h1>
          <h2>UI & UX designer</h2>
          <p>Web & mobile</p>
        </div>
      </header>
      {/* <p>Developer & designer</p> */}
      <p>
        Previously at <Link to='/work'>Applauz</Link> and{' '}
        <Link to='/work'>Vuzec</Link>
      </p>
    </div>
  )
}
