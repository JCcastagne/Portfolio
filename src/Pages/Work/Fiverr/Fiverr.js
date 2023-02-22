import './Fiverr.css'
import '../Work.css'

import fiverr_hero_light from '../../../img/portfolioAssets/Fiverr/fiverr_hero_light.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import fiverr_hero from '../../../img/portfolioAssets/Fiverr/fiverr_hero.png'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Fiverr () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Work' id='Fiverr'>
      <section className='hero'>
        <header className='header'>
          <span>
            <img
              src={fiverr_hero_light}
              id='heroTitle'
              alt='Header logo of Fiverr'
              aria-label='Fiverr'
              aria-roledescription='Header logo of Fiverr'
            />
            <img src={arrow_top_right_light} id='arrow' alt='arrow icon' />
          </span>

          <p>Building a completely new music-nft trading web platform</p>

          <div className='chips'>
            <p>Web</p>
            <p>Mobile</p>
            <p>Desktop</p>
            <p>Mobile app</p>
          </div>
        </header>

        <img id='heroBanner' src={fiverr_hero} alt='The official Fiverr logo' />
      </section>
    </div>
  )
}
