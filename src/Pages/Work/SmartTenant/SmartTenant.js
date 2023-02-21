import './SmartTenant.css'
import '../Work.css'

import intelidevs_hero_light from '../../../img/portfolioAssets/SmartTenant/intelidevs_hero_light.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'
import SmartTenant_hero from '../../../img/portfolioAssets/SmartTenant/SmartTenant_hero.png'
import mapping_v1 from '../../../img/portfolioAssets/SmartTenant/mapping_v1.png'
import mapping_v2 from '../../../img/portfolioAssets/SmartTenant/mapping_v2.png'
import primaryUserFlow from '../../../img/portfolioAssets/SmartTenant/primaryUserFlow.png'
import paperProto_v1 from '../../../img/portfolioAssets/SmartTenant/paperProto_v1.png'
import paperProto_v2 from '../../../img/portfolioAssets/SmartTenant/paperProto_v2.png'
import prototype_v1 from '../../../img/portfolioAssets/SmartTenant/prototype_v1.png'
import reactNative from '../../../img/portfolioAssets/SmartTenant/reactNative.png'
import devStack from '../../../img/portfolioAssets/SmartTenant/devStack.png'

import SmartTenant_1 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_1.png'
import SmartTenant_2 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_2.png'
import SmartTenant_3 from '../../../img/portfolioAssets/SmartTenant/SmartTenant_3.png'

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

      <section className='story'>
        <p className='title'>Project requirement scope</p>
        <div className='tileGrid'>
          <div>
            <p className='title'>Business objectives</p>
            <ul>
              <li>Customer retention</li>
              <li>Create a sense of connection </li>
              <li>Increase tenant satisfaction</li>
            </ul>
          </div>
          <div>
            <p className='title'>Customer goals</p>
            <ul>
              <li>Low effort way of connecting with their community</li>
              <li>A sense of belonging</li>
            </ul>
          </div>
          <div>
            <p className='title'>Constraints</p>
            <ul>
              <li>Existing brand guidelines</li>
              <li>Restricted project timelines</li>
              <li>COVID-19 environment</li>
            </ul>
          </div>
          <div>
            <p className='title'>My responsibilities</p>
            <ul>
              <li>
                Leading design efforts (wireframing, prototyping, layouts,
                visual design, etc.)
              </li>
              <li>Create UX-backed flows and designs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='story'>
        <p className='title'>Information architecture</p>
        <p>
          Organizing and structuring content and information, making it as
          intuitive and user-friendly as possible by compartmentalizing key
          content through sorting exercises.
        </p>

        <figure>
          <img src={mapping_v1} alt='Initial mapping of features' />
          <figcaption>First draft</figcaption>
        </figure>
        <figure>
          <img src={mapping_v2} alt='Secondary mapping of features' />
          <figcaption>Final version</figcaption>
        </figure>
        <figure>
          <img src={primaryUserFlow} alt='Maping of user flow' />
          <figcaption>User flow</figcaption>
        </figure>
      </section>

      <section className='story'>
        <p className='title'>System architecture</p>
        <span className='heading'>
          While considering key paths, it was important to build screens that
          brings users to their most important features within the least amount
          of steps.
        </span>
        <p>
          Usability testing while using paper prototypes enabled us to iterate
          and fine-tune the user experience, leading us to a polished and
          intuitive design system and flow.
        </p>

        <figure>
          <img src={paperProto_v1} alt='Initial paper prototype' />
          <figcaption>First paper prototype draft</figcaption>
        </figure>
        <figure>
          <img src={paperProto_v2} alt='Secondary paper prototype' />
          <figcaption>Second iteration of the paper prototype</figcaption>
        </figure>
        <figure>
          <img src={prototype_v1} alt='prototype with applied visual design' />
          <figcaption>Applying visual design</figcaption>
        </figure>
      </section>

      <section className='story'>
        <p className='title'>Development</p>
        <span className='heading'>
          Translating design to code, using React Native to build the mobile
          application lets us build for all three major platforms
          simultaneously.
        </span>
        <p>
          The project required to have all platforms to be accounted for while
          being built. This is why React Native was the best choice for our
          codebase since it allows the team to write code once and deploy it
          across multiple platforms.
        </p>

        <div className='imgWithQuote'>
          <p>
            React Native was also an excellent choice because it allowed us to
            build a{' '}
            <b>
              high performance, cross-platform compatible application with
              reusable code
            </b>
            , which was ideal given the project's short deadline.
          </p>
          <figure>
            <img
              src={reactNative}
              alt='Flow displaying how React Native takes code and transforms it into the three major platforms'
            />
            <figcaption>
              A simple mobile stack made it easy for anyone to understand and
              maintain the codebase
            </figcaption>
          </figure>
        </div>

        <p>
          The stack consisted of Google FireBase for data storage, React
          (Javascript) for the frontend and Node.js for the backend.
        </p>
        <p>
          We also incorporated PicPurify&#8212;a third-party API that provides
          real-time image moderation based on advanced deep learning. This was
          an important tool to help prevent unwanted content being uploaded onto
          our data store.
        </p>

        <figure>
          <img
            src={devStack}
            alt='Development stack of the mobile application'
          />
          <figcaption>
            A simple mobile stack made it easy for anyone to understand and
            maintain the codebase
          </figcaption>
        </figure>
      </section>

      <section className='banner'>
        <div className='container'>
          <p className='title'>Final product</p>
          <span className='heading'>
            An{' '}
            <b>
              easy, straightforward and accessible way to engage with others in
              your community while staying informed
            </b>{' '}
            of upcoming payments, announcements and events
          </span>
        </div>
      </section>
    </div>
  )
}
