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

import star_green from '../../../img/icons/star_green.svg'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Fiverr () {
  const reviews = [
    {
      name: 'Steven',
      country: 'United States',
      time: '1 year ago',
      rating: 5,
      body: "J-C was great. Very communicative and responsive. On my website's graphic design project, his eye for design was evident throughout. Highly recommend him."
    },
    {
      name: 'Steven',
      country: 'United States',
      time: '1 year ago',
      rating: 5,
      body: 'Working with J-C was great. He actively sought to understand my objectives while presenting his point of view as a designer. Led to a really great outcome.'
    },
    {
      name: 'Galactus97',
      country: 'United States',
      time: '1 year ago',
      rating: 5,
      body: "JC was fantastic I'm definitely going to bring him back for more work soon."
    },
    {
      name: 'ThyFlow',
      country: 'United States',
      time: '1 year ago',
      rating: 5,
      body: 'Communication was top notch and we were able to work together to produce something amazing'
    },
    {
      name: 'Steven',
      time: '1 year ago',
      rating: 5,
      country: 'United States',
      body: 'JC did a great job. I will be using him for the rest of the project(s).'
    }
  ]

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

      <section className='banner'>
        <div className='container'>
          <p className='title'>Reviews</p>
          <span className='heading'>
            <b>100% of clients rated their orders 5-stars.</b> Discover what
            people have to say about my relentless dedication to{' '}
            <b>delivering exceptional, quality work.</b>
          </span>
        </div>
      </section>

      <section className='story'>
        <span className='heading'>
          All of my clients have given me 5 stars for{' '}
          <b>Communication, Service, 'Would buy again', and 'Goals achieved'</b>{' '}
          categories on Fiverr.
        </span>
        <p>
          Customers love my dedication and passion for creating solutions that
          work and fit their needs. My commitment to excellence and attention to
          detail ensures that every project is delivered with high-quality
          results.
        </p>

        <div className='reviews'>
          {reviews.map((review, index) => {
            return (
              <Link
                className='card'
                to='https://www.fiverr.com/jccastagne'
                target='_blank'
              >
                <div className='header'>
                  <p>{`${review.name}, ${review.country}`}</p>
                  <img src={arrow_top_right_light} alt='arrow icon' />
                </div>

                <div className='rating'>
                  <p>{review.time}</p>
                  <div className='stars'>
                    {Array.apply(null, { length: review.rating }).map(
                      (e, i) => (
                        <img src={star_green} alt='star icon' key={i} />
                      )
                    )}
                  </div>
                </div>

                <p className='body'>&ldquo;{review.body}&rdquo;</p>
              </Link>
            )
          })}
          <Link
            className='card'
            to='https://www.fiverr.com/jccastagne'
            target='_blank'
            id='hidden'
          >
            <p className='body'>+3 hidden for NDAs</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
