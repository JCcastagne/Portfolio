import './SmartTenant.css'
import '../Work.css'

import SmartTenant_hero from '../../../img/portfolioAssets/SmartTenant/SmartTenant_hero.png'
import SmartTenant_1 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_1.png'
import SmartTenant_2 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_2.png'
import SmartTenant_3 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_3.png'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import intelidevs_hero_light from '../../../img/portfolioAssets/SmartTenant/intelidevs_hero_light.svg'

export default function SmartTenant () {
  return (
    <div class='Work' id='SmartTenant'>
      <section className='hero'>
        <header className='header'>
          <span>
            <img
              src={intelidevs_hero_light}
              id='heroTitle'
              alt='Header logo of Intelidevs'
              aria-label='Intelidevs'
              aria-roledescription='Header logo of Intelidevs'
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
          src={SmartTenant_hero}
          alt='SmartTenant ui design on iPhones'
        />
      </section>

      <section className='story'>
        <p className='title'>Introduction</p>
        <span className='heading'>
          A mobile app built from the ground up{' '}
          <b>offering tenants the ability to engage with their community</b>,
          stay up to date with payments, earn rewards and enjoy a host of other
          exciting features.
        </span>

        <div className='textGrid'>
          <div>
            <p className='title'>My role</p>
            <p>Lead UI/UX Designer and Full Stack Developer:</p>
            <p>
              Overseeing market research, information architecture, user flows,
              wireframes, interactive prototypes, and usability testing.
            </p>
            <p>
              Contribute to the implementation of robust and scalable solutions
              that meet user requirements through coding, testing, and
              debugging.
            </p>
          </div>
          <div>
            <p className='title'>Tools</p>
            <p>
              Figma, React Native, NodeJS, Javascript, Google Firebase/Firestore
            </p>
          </div>
          <div>
            <p className='title'>Team</p>
            <p>InteliDevs' team; myself and 4 Full Stack Developers.</p>
          </div>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Problem</p>
        <span className='heading'>
          Tenants are not engaged socially within their communities, leading to
          a decreased satisfaction within their living experience.
        </span>
        <p>
          In many urban areas, people are increasingly choosing to rent
          apartments, but often, renters do not feel connected to their
          communities.
        </p>
        <p>
          They may lack opportunities for social interaction with their
          neighbors, leading to a feeling of isolation and disconnection.
        </p>
        <figure>
          <img src={SmartTenant_3} alt='SmartTenant3' />
          <figcaption>caption</figcaption>
        </figure>
        <p>
          This lack of social engagement and community involvement can have
          negative effects on renters' well-being, leading to decreased
          satisfaction with their living experience and potentially even causing
          them to leave their apartments earlier than they might otherwise.
        </p>
      </section>
    </div>
  )
}
