import './Applauz.css'
import '../Work.css'

import applauz_hero_light from '../../../img/portfolioAssets/Applauz/applauz_hero_light.svg'
import applauz_hero from '../../../img/portfolioAssets/Applauz/applauz_hero.png'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Applauz () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div class='Work' id='Applauz'>
      <section className='hero'>
        <header className='header'>
          <span>
            <img
              src={applauz_hero_light}
              id='heroTitle'
              alt='Header logo of Applauz'
              aria-label='Applauz'
              aria-roledescription='Header logo of Applauz'
            />
            <img src={arrow_top_right_light} id='arrow' alt='arrow icon' />
          </span>

          <p>Social employee recognition and management tool (NDA)</p>

          <div className='chips'>
            <p>Web</p>
            <p>Desktop</p>
            <p>Mobile app</p>
          </div>
        </header>

        <img
          id='heroBanner'
          src={applauz_hero}
          alt='Applauz logo on an iPhone and iPad'
        />
      </section>

      <section className='story'>
        <p className='title'>Introduction</p>
        <span className='heading'>
          Since all content of this project is confidential, I'm happy to
          provide more information verbally during the interview. I may only be
          able to discuss my role and general responsibilities.
        </span>

        <div className='textGrid'>
          <div>
            <p className='title'>My role</p>

            <p>Full Stack Developer:</p>
            <p>Build an updated administrative panel from the ground-up.</p>
            <p>
              Updating and maintaining components, resolving bugs, tickets,
              technical debt.
            </p>
          </div>
          <div>
            <p className='title'>Tools</p>
            <p>
              Figma, ReactJS, NodeJS, Javascript, Amazon AWS S3, OAuth 2.0,
              OpenID Connect
            </p>
          </div>
          <div>
            <p className='title'>Team</p>
            <p>Established, privately owned startup with 20-25 employees.</p>
          </div>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Links</p>

        <div className='links'>
          <p className='heading'>To learn more about Applauz:</p>

          <span>
            <img src={arrow_top_right_light} alt='arrow icon' />
            <Link to='https://applauz.me' target='_blank'>
              Applauz website
            </Link>
          </span>
          <span>
            <img src={arrow_top_right_light} alt='arrow icon' />
            <Link
              to='https://www.linkedin.com/company/applauz-recognition/'
              target='_blank'
            >
              Applauz on LinkedIn
            </Link>
          </span>
        </div>
      </section>
    </div>
  )
}
