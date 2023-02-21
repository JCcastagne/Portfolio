import './Vuzec.css'
import '../Work.css'

// images
import vuzec_hero_light from '../../../img/portfolioAssets/Vuzec/vuzec_hero_light.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import vuzec_hero from '../../../img/portfolioAssets/Vuzec/vuzec_hero.png'
import desiredFeatures from '../../../img/portfolioAssets/Vuzec/desiredFeatures.png'
import categorizedFeatures from '../../../img/portfolioAssets/Vuzec/categorizedFeatures.png'
import userFlow from '../../../img/portfolioAssets/Vuzec/userFlow.png'
import landing_home from '../../../img/portfolioAssets/Vuzec/landing_home.png'
import dashboard from '../../../img/portfolioAssets/Vuzec/dashboard.png'
import signIn from '../../../img/portfolioAssets/Vuzec/signIn.png'

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

      <section className='story'>
        <p className='title'>Information architecture</p>

        <p>
          Shareholders provided the features they would like to incorporate into
          the application. Many of them overlapping, changing, or being removed
          as time moved on in this new, fast-emerging sector.
        </p>

        <figure>
          <img
            src={desiredFeatures}
            alt='Map of all requested and desired user features from shareholders'
          />
          <figcaption>Mapping out all requested user features</figcaption>
        </figure>

        <p>
          Once all features are on the table, we can create the information
          architecture by categorizing the application's features and what they
          will each contain respectively.
        </p>

        <figure>
          <img
            src={categorizedFeatures}
            alt='Map of applications features being, categorized'
          />
          <figcaption>Categorizing application's features</figcaption>
        </figure>

        <p>
          Finally, we're able to create the user flow and map out all of the
          application's possible states and combinations.
        </p>

        <figure>
          <img src={userFlow} alt='Map of the final user flow' />
          <figcaption>Final user flow</figcaption>
        </figure>
      </section>

      <section className='banner'>
        <div className='container'>
          <p className='title'>Final product</p>
          <span className='heading'>
            An innovative web3 trading platform, leveraging advanced blockchain
            technology to offer a{' '}
            <b>secure and decentralized trading environment</b> for digital
            assets.
          </span>
        </div>
      </section>

      <section className='story'>
        <span className='heading'>
          Users are able to experience a fully customized onboarding process.
          Once enrolled, they have the ability to create an artist account which
          permits them to create and sell releases. Any user is able to view,
          sell and exchange tokens.
        </span>

        <p>
          The platform's <b>design system</b> has been completely UX-engineered
          along with responsive components. Dynamic content is also displayed on
          main pages to create a sense of immersion while also retaining
          accessibility.
        </p>

        <figure>
          <img
            src={landing_home}
            alt='Screenshot of the Trading pages landing view'
          />
          <figcaption>Trading page's landing view</figcaption>
        </figure>

        <p>
          The application is <b>built with ReactJS</b> and managed by WebPack to
          ensure efficient maintenance of both the codebase and the
          customizable, responsive components.
        </p>

        <p>
          <b>EthersJS and the UniswapV3 subgraph API</b> enables the viewing,
          buying and selling of these financial assets while our{' '}
          <b>custom, private music distributor's third-party API</b> handles the
          submission of artist releases.
        </p>

        <figure>
          <img src={dashboard} alt='Screenshot of the dashboard page' />
          <figcaption>
            Dashboard page lets users view their wallet balance, earnings and
            past transactions
          </figcaption>
        </figure>

        <p>
          User onboarding and authentication has been built both with our
          custom, in-house solution and OAuth/OpenID Connect, providing the user
          an easy, fast and seamless onboarding experience.
        </p>

        <figure>
          <img src={signIn} alt='Screenshot of the Sign up/login page' />
          <figcaption>Sign up/login page</figcaption>
        </figure>
      </section>
    </div>
  )
}
