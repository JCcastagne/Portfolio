import './Fiverr.css'
import '../Work.css'

import tri_ui_screens_light from '../../../img/portfolioAssets/Fiverr/tri_ui_screens_light.jpg'

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

export default function Fiverr () {
  return (
    <div className='Work' id='Fiverr'>
      <section className='intro'>
        <div className='header'>
          <h1>Fiverr</h1>
          <h2>Freelance UI/UX design</h2>
          <div className='chips'>
            <p>Web</p>
            <p>Mobile</p>
            <p>Desktop</p>
            <p>Mobile app</p>
          </div>
        </div>
        <img
          className='hero'
          src={tri_ui_screens_light}
          alt='Fiverr ui designs'
        />

        <div className='info'>
          <p className='title'>Introduction</p>
          <p>
            As a freelance UI and UX Designer, I provide custom solutions for
            any type of product, platform or niche. Specializing in creating
            beautiful and intuitive interfaces to meet users' needs.
          </p>
          <div className='grid'>
            <div>
              <p className='subTitle'>My role</p>
              <p>
                Combining my skills in user research, prototyping, and design to
                create engaging digital experiences.
              </p>
              <p>
                Coordinating with clients to meet both the company and user’s
                needs.
              </p>
            </div>
            <div>
              <p className='subTitle'>Project scope</p>
              <p>
                A wide range of company sizes; anywhere from pre-series startups
                to larger 100+ employees.
              </p>
            </div>
            <div>
              <p className='subTitle'>Tools</p>
              <p>Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator</p>
            </div>
          </div>
        </div>
      </section>

      <section className='story' id='delight'>
        <p className='title'>Delight</p>

        <div className='slide'>
          <p>
            A seasoned startup looking to modernize and upgrade their current
            top mobile dating app.
          </p>
          <p>
            In addition to an update, "Delight" required a review of its designs
            to ensure that they adhered to Apple's Human Interface Guidelines
            before they could be submitted to the app store.
          </p>
          <p>
            With over 350 reviews, Delight now has 4.2/5 stars on the Apple App
            Store.
          </p>

          <div className='pictureGrid'>
            <img
              src={delight_hero}
              alt='delight app showcase'
              className='bgBlur'
            />
            <img src={delight_hero} alt='delight app showcase' />
            <div className='row'>
              <div className='col'>
                <img src={delight2} alt='delight app showcase 2' />
              </div>
              <div className='col'>
                <img src={delight3} alt='delight app showcase 3' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='story' id='thyflow'>
        <p className='title'>ThyFlow</p>

        <div className='slide'>
          <p>
            A new California-based startup providing "Uber-like" on-demand
            booking for a variety of services, including but not limited to: dog
            grooming, hair styling, barbers, etc.
          </p>

          <div className='pictureGrid'>
            <img
              src={ThyFlow_hero}
              alt='ThyFlow app showcase'
              className='bgBlur'
            />
            <img src={ThyFlow_hero} alt='ThyFlow app showcase' />
            <div className='row'>
              <div className='col'>
                <img src={ThyFlow2} alt='ThyFlow app showcase 2' />
              </div>
              <div className='col'>
                <img src={ThyFlow3} alt='delight app showcase 3' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='story' id='thotExperiment'>
        <p className='title'>ThotExperiment</p>

        <div className='slide'>
          <p>
            A company with a wide range of adult wellness applications looking
            to build a new website for their parent LLC corporation.
          </p>

          <p>
            The goal for this customer was to have a formal and modern corporate
            website that displayed all of their products while remaining
            professional.
          </p>

          <div className='pictureGrid'>
            <img
              src={thotexperiment_hero}
              alt='ThotExperiment app showcase'
              className='bgBlur'
            />
            <img src={thotexperiment_hero} alt='ThotExperiment app showcase' />
            <div className='row'>
              <div className='col'>
                <img
                  src={thotexperiment2}
                  alt='ThotExperiment desktop landing page'
                />
              </div>
              <div className='col'>
                <img src={thotexperiment3} alt='ThotExperiment desktop page' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='final'>
        <div className='info'>
          <p className='title'>And much, much more</p>
          <p>
            Since most of my projects are protected under NDAs, I cannot display
            most of my best work from Fiverr. You can always view more of my
            design work on{' '}
            <Link
              to='https://dribbble.com/jccastagne'
              target='_blank'
              className='dribbble'
            >
              Dribbble
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
