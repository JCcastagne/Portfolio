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
      <section className='intro'>
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

      {/* 
      <section className='story'>
        <p className='title'>Problem discovery</p>

        <div className='slide'>
          <p>
            Tenants are not engaged with their communities when renting a living
            space.
          </p>
          <p>
            While conducting early interviews with renters, many expressed
            roadblocks when engaging with others in their rental property,
            lacking a sense of connecting with the people around them.
          </p>
          <p>
            Typically, they would simply avoid socializing with anyone and keep
            to themselves.
          </p>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Our solution - SmartTenant</p>

        <div className='slide'>
          <p>
            A social media platform that connects tenants in their community.
          </p>
          <img src={SmartTenant_1} alt='SmartTenant showcase banner' />
          <caption>
            Expand your social network by interacting with other tenants inside
            the same building.
          </caption>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Staying connected with those around you</p>

        <div className='slide'>
          <p>- Post a status and pictures for others to engage with</p>
          <p>
            - Post announcements as property managers or community moderators
          </p>
          <p>- Get to know the people you live close with</p>
          <img src={SmartTenant_1} alt='SmartTenant showcase banner' />
          <caption>Newsfeed (left) and post/comments view (right)</caption>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Stay in the know</p>

        <div className='slide'>
          <p>View your rental's amenities</p>
          <p>Know who to contact</p>
          <p>View other rental spaces</p>

          <img src={SmartTenant_2} alt='SmartTenant showcase banner' />
          <caption>
            Building information(left), newsfeed (center) and post/comments view
            (right)
          </caption>
        </div>
      </section>

      <section className='final'>
        <div className='info'>
          <p className='title'>Final outcomes</p>
          <p>
            By the end of the project’s term, Algonquin College approached our
            team to take over the application under their name, furthering their
            relationship with the parent company; Smart Living Properties.
          </p>
          <div className='grid'>
            <div>
              <p className='subTitle'>Design</p>
              <p>To be completed</p>
              <p>To be completed</p>
              <p>To be completed</p>
              <p>To be completed</p>
            </div>
            <div>
              <p className='subTitle'>Frontend</p>
              <p>To be completed</p>
              <p>To be completed</p>
              <p>To be completed</p>
            </div>
            <div>
              <p className='subTitle'>Backend</p>
              <p>To be completed</p>
              <p>To be completed</p>
            </div>
          </div>
          <div className='pictureGrid'>
            <img src={SmartTenant_1} alt='landing home' className='bgBlur' />
            <img src={SmartTenant_1} alt='landing home' />
            <div className='row'>
              <div className='col'>
                <img src={SmartTenant_2} alt='trading home' />
                <img src={SmartTenant_3} alt='dashboard transactions' />
              </div>
              <div className='col'>
                <img src={SmartTenant_3} alt='dashboard balance' />
                <img src={SmartTenant_2} alt='dashboard balance' />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
