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

      <section className='story'>
        <p className='title'>Introduction</p>
        <span className='heading'>
          As a freelance UI and UX Designer, I provide custom solutions for any
          type of product, platform or niche.{' '}
          <b>Specialized in creating beautiful and intuitive interfaces</b> to
          meet both the clients' and users' needs.
        </span>

        <div className='textGrid'>
          <div>
            <p className='title'>My role</p>
            <p>
              Combining my skills in user research, information architecture,
              user flows, wireframing, interactive prototyping and design to
              create engaging digital experiences.
            </p>
            <p>
              Coordinating with clients to meet both the company and user's
              needs.
            </p>
          </div>
          <div>
            <p className='title'>Tools</p>
            <p>Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator</p>
          </div>
          <div>
            <p className='title'>Project scopes</p>
            <p>
              A wide range of company sizes; anywhere from pre-series startups
              to larger 100+ employees.
            </p>
          </div>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Disclosure</p>
        <span className='heading'>
          Only disclosable projects can be shown. Due to the nature of this
          position, my latest work is constantly being updated as I am
          constantly am working with new clients whenever I have free time.
        </span>

        <div className='links'>
          <p className='heading'>
            To stay up to date and view my latest (disclosable) work:
          </p>
          <span>
            <img src={arrow_top_right_light} alt='arrow icon' />
            <Link to='https://dribbble.com/jccastagne' target='_blank'>
              View my work on Dribbble
            </Link>
          </span>
          <span>
            <img src={arrow_top_right_light} alt='arrow icon' />
            <Link to='https://www.instagram.com/jc.castagne/' target='_blank'>
              View my work on Instagram
            </Link>
          </span>
          <span>
            <img src={arrow_top_right_light} alt='arrow icon' />
            <Link to='https://www.fiverr.com/jccastagne' target='_blank'>
              Hire me on Fiverr
            </Link>
          </span>
        </div>
      </section>
    </div>
  )
}
