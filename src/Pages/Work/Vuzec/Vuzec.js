import './Vuzec.css'
import '../Work.css'

// images
import vuzec_hero_light from '../../../img/portfolioAssets/Vuzec/vuzec_hero_light.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import vuzec_hero from '../../../img/portfolioAssets/Vuzec/vuzec_hero.png'

export default function Vuzec () {
  return (
    <div class='Work' id='Vuzec'>
      <section className='hero'>
        <header className='header'>
          <span>
            <img
              src={vuzec_hero_light}
              id='heroTitle'
              alt='Header logo of Vuzec'
              aria-label='Vuzec'
              aria-roledescription='Header logo of Vuzec'
            />
            <img src={arrow_top_right_light} id='arrow' alt='arrow icon' />
          </span>

          <p>Social app connecting tenants to their community</p>

          <div className='chips'>
            <p>Mobile app</p>
          </div>
        </header>

        <img
          id='heroBanner'
          src={vuzec_hero}
          alt='SmartTenant ui design on iPhones'
        />
      </section>

      <section className='story'>
        <p className='title'>Introduction</p>
        <span className='heading'>
          Leveraging the latest blockchain technology to off a{' '}
          <b>market-leading web3 platform</b> to view, purchase and exchange
          music NFTs.
        </span>

        <div className='textGrid'>
          <div>
            <p className='title'>My role</p>
            <p>Lead Frontend Developer and UI/UX Designer</p>
            <p>
              Transform shareholder's ideas into a concrete web application.
              Overseeing frontend team to create an overhaul of the current
              website's design system, flow, features and its codebase.
            </p>
          </div>
          <div>
            <p className='title'>Tools</p>
            <p>Figma, ReactJS, NodeJS, Javascript, Amazon AWS S3, OAuth</p>
          </div>
          <div>
            <p className='title'>Team</p>
            <p>
              1 Project Manager/Developer, 1 Full stack Developer, 1 Product
              Owner, 1 Graphic Designer
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
