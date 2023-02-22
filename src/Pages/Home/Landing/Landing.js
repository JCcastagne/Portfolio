import './Landing.css'

import { Link, useSearchParams } from 'react-router-dom'

import name_hero_light from '../../../img/name_hero_light.svg'
import lastName_hero_light from '../../../img/lastName_hero_light.svg'
import server_light from '../../../img/icons/server_light.svg'
import laptop_light from '../../../img/icons/laptop_light.svg'
import design_light from '../../../img/icons/design_light.svg'
import { useEffect, useState } from 'react'

export default function Landing () {
  const [scaleLanding, setScaleLanding] = useState('100%')

  // window.addEventListener('scroll', handleScroll)

  // function handleScroll (e) {
  //   let scroll = window.scrollY
  //   let height = window.innerHeight

  //   let percentOfWindowHeight = Math.floor((scroll * 100) / height)

  //   // percentOfWindowHeight = percentage of where the user is scrolled at compared to the full window height
  //   // we subtract percentOfWindowHeight from 100 because we want to flip the number so that make it progressively smaller
  //   // then we use Math.max to choose between two numbers, whichever is biggest between the product of percentOfWindowHeight and 66;
  //   // 66 being the smallest we want the scale to be

  //   setScaleLanding(Math.max(100 - percentOfWindowHeight, 66))
  // }

  // useEffect(() => {
  //   console.log(scaleLanding)
  // })

  return (
    <header
      className='Landing'
      style={{
        transform: `scale(${scaleLanding}%)`,
        opacity: `${scaleLanding}%`
      }}
    >
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
        Previously at{' '}
        <Link to='/work/applauz' target='_blank'>
          Applauz
        </Link>{' '}
        and{' '}
        <Link to='/work/vuzec' target='_blank'>
          Vuzec
        </Link>
      </p>
    </header>
  )
}
