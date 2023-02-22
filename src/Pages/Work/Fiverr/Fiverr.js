import './Fiverr.css'
import '../Work.css'

import fiverr_hero_light from '../../../img/portfolioAssets/Fiverr/fiverr_hero_light.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import fiverr_hero from '../../../img/portfolioAssets/Fiverr/fiverr_hero.png'

import delight_hero from '../../../img/portfolioAssets/Fiverr/delight/delight_hero.png'
import delight2 from '../../../img/portfolioAssets/Fiverr/delight/delight2.png'
import delight3 from '../../../img/portfolioAssets/Fiverr/delight/delight3.png'

import ThyFlow_hero from '../../../img/portfolioAssets/Fiverr/thyflow/ThyFlow_hero.png'
import ThyFlow2 from '../../../img/portfolioAssets/Fiverr/thyflow/ThyFlow2.png'
import ThyFlow3 from '../../../img/portfolioAssets/Fiverr/thyflow/ThyFlow3.png'

import thotexperiment_hero from '../../../img/portfolioAssets/Fiverr/thotexperiment/thotexperiment_hero.png'
import thotexperiment2 from '../../../img/portfolioAssets/Fiverr/thotexperiment/thotexperiment2.png'
import thotexperiment3 from '../../../img/portfolioAssets/Fiverr/thotexperiment/thotexperiment3.png'

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

      <section className='story' id='delight'>
        <p className='title'>Delight</p>

        <span className='heading'>
          A seasoned startup looking to update and modernize their current top
          mobile dating app.
        </span>
        <p>
          In addition to an update, "Delight" required a review of its designs
          to ensure that they adhered to Apple's Human Interface Guidelines
          before they could be submitted to the app store.
        </p>

        <p>
          With over 350 reviews,{' '}
          <b>Delight now has 4.2/5 stars on the Apple App Store.</b>
        </p>

        <div className='picGrid'>
          {/* <img src={delight_hero} alt='Stylized app showcase of Delight' /> */}
          <img src={delight_hero} alt='Stylized app showcase of Delight' />
          <img src={delight2} alt='App showcase of Delight' />
          <img src={delight3} alt='App showcase of Delight with logo' />
        </div>
      </section>

      <section className='story' id='thyFlow'>
        <p className='title'>ThyFlow</p>

        <span className='heading'>
          A new California-based startup providing "Uber-like" on-demand booking
          for a variety of services, including but not limited to: dog grooming,
          hair styling, barbers, etc.
        </span>
        <p>
          ThyFlow is currently in the process of their initial beta launch, with
          the goal of launching their product fully within the next year.
        </p>

        <div className='picGrid'>
          <img src={ThyFlow_hero} alt='Stylized app showcase of ThyFlow' />
          <img src={ThyFlow2} alt='App showcase of ThyFlow' />
          <img src={ThyFlow3} alt='App showcase of ThyFlow with logo' />
        </div>
      </section>

      <section className='story' id='thotExperiment'>
        <p className='title'>ThotExperiment</p>

        <span className='heading'>
          A company with a wide range of adult wellness applications looking to
          build a new website for their parent LLC corporation.
        </span>

        <p>
          Since ThotExperiment's initial launch of their first mobile app, they
          have experienced great success{' '}
          <b>with over 100K+ downloads achieved.</b>
        </p>

        <div className='picGrid'>
          <img
            src={thotexperiment_hero}
            alt='Stylized app showcase of ThotExperiment'
          />
          <img
            src={thotexperiment2}
            alt='Website landing page of ThotExperiment'
          />
          <img
            src={thotexperiment3}
            alt='Website philosophy page of ThotExperiment'
          />
        </div>
      </section>
    </div>
  )
}
