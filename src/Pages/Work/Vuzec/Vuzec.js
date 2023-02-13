import './Vuzec.css'
import '../Work.css'

import vuzec_dual_desktop from '../../../img/portfolioAssets/Vuzec/vuzec_dual_desktop.png'
import desiredFeatures from '../../../img/portfolioAssets/Vuzec/information-arch/desiredFeatures.png'
import categorizedFeatures from '../../../img/portfolioAssets/Vuzec/information-arch/categorizedFeatures.png'
import userFlow from '../../../img/portfolioAssets/Vuzec/information-arch/userFlow.png'
import vuzecDesignSystem from '../../../img/portfolioAssets/Vuzec/vuzecDesignSystem.png'
import landing_home from '../../../img/portfolioAssets/Vuzec/final-screens/landing_home.png'
import trading_home from '../../../img/portfolioAssets/Vuzec/final-screens/trading_home.png'
import dashboard_balance from '../../../img/portfolioAssets/Vuzec/final-screens/dashboard_balance.png'
import dashboard_transactions from '../../../img/portfolioAssets/Vuzec/final-screens/dashboard_transactions.png'
import browse from '../../../img/portfolioAssets/Vuzec/final-screens/browse.png'
import dashboard from '../../../img/portfolioAssets/Vuzec/final-screens/dashboard.png'

export default function Vuzec () {
  return (
    <div class='Work' id='Vuzec'>
      <section className='intro'>
        <h1>Vuzec</h1>
        <h2>Building a completely new music-nft trading platform</h2>
        <div className='chips'>
          <p>Web</p>
          <p>Desktop</p>
          <p>Mobile</p>
        </div>
        <img
          className='hero'
          src={vuzec_dual_desktop}
          alt='vuzec desktop webpages'
        />

        <div className='info'>
          <p className='title'>Introduction</p>
          <p>
            Build a completely new web application for new customers who wish to
            purchase, exchange and view music NFTs. These assets represent
            ownership of an artist's release.
          </p>
          <div className='grid'>
            <div>
              <p className='subTitle'>My role</p>
              <p>
                Transforming ideas into a concrete web application. Create an
                overhaul of the current website's design system, flow, features
                and its codebase.
              </p>
              <p>
                Bridging the gap between the beauty of the well-established
                commercial Web2 space with the resources of Web3.
              </p>
            </div>
            <div>
              <p className='subTitle'>Project scope</p>
              <p>
                5 Shareholders including 1 Project Manager/Developer, 1 Product
                Owner, 1 Graphic Designer
              </p>
            </div>
            <div>
              <p className='subTitle'>Tools</p>
              <p>
                Figma, ReactJS, NodeJS, Javascript, EthersJS, UniswapV3,
                GraphQL, Amazon AWS S3, OAuth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='story'>
        <p className='title'>
          1. Defining user flow and information architecture
        </p>

        <div className='slide'>
          <p>
            Shareholders provided the features they would like to incorporate
            into the application. Many of them overlapping, changing, or being
            removed as time moved on in this new, fast-emerging sector.
          </p>
          <img src={desiredFeatures} alt='desired features' />
          <caption>Mapping out all requested user features</caption>
        </div>
        <div className='slide'>
          <p>
            Once all features are on the table, we can create the information
            architecture by categorizing the application's features and what
            they will each contain respectively.
          </p>
          <img src={categorizedFeatures} alt='categorized features' />
          <caption>Categorizing application’s features</caption>
        </div>
        <div className='slide'>
          <p>
            Finally, we're able to create the user flow and map out all of the
            application's possible states and combinations.
          </p>
          <img src={userFlow} alt='user flow' />
          <caption>Final user flow</caption>
        </div>
      </section>

      <section className='story'>
        <p className='title'>
          2. Complete overhaul of the current design system
        </p>

        <div className='slide'>
          <p>
            During research, it was obvious that the Web3 space was still in its
            infancy. Most websites in this space were usually “designed” by
            programmers, startups who did not have the resources to hire UI and
            UX experts to build an eye-catching visual experience.
          </p>
          <p>
            The new design system's approach is full UX engineered with
            attention to detail; keeping components clean, accessible and clear
            of their side effects.
          </p>
          <img src={vuzecDesignSystem} alt='Vuzec design system' />
          <caption>Overhauled design system, fully UX engineered</caption>
        </div>
      </section>

      <section className='final'>
        <div className='info'>
          <p className='title'>Final outcomes</p>
          <p>
            Users are now able to go through a fully customized onboarding
            process. Once logged in, they have the ability to create an artist
            account which permits them to create and sell releases. Any user is
            able to view, sell and exchange tokens.
          </p>
          <div className='grid'>
            <div>
              <p className='subTitle'>Design</p>
              <p>UX engineered</p>
              <p>Fully implemented design system</p>
              <p>Responsive components</p>
              <p>
                Dynamic colors throughout the application handles any content
                (ex: album artwork) to be displayed without accessibility issues
              </p>
            </div>
            <div>
              <p className='subTitle'>Frontend</p>
              <p>ReactJS, WebPack-managed project</p>
              <p>Mobile-first approach, responsive components</p>
              <p>EthersJS contract calls, UniswapV3 graph calls</p>
            </div>
            <div>
              <p className='subTitle'>Backend</p>
              <p>OAuth and in-house auth for user login and onboarding</p>
              <p>AWS S3 deployment</p>
            </div>
          </div>
          <div className='pictureGrid'>
            <img src={landing_home} alt='landing home' className='bgBlur' />
            <img src={landing_home} alt='landing home' />
            <div className='row'>
              <div className='col'>
                <img src={trading_home} alt='trading home' />
                <img
                  src={dashboard_transactions}
                  alt='dashboard transactions'
                />
                <img src={dashboard} alt='dashboard' />
              </div>
              <div className='col'>
                <img src={dashboard_balance} alt='dashboard balance' />
                <img src={browse} alt='browse' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
