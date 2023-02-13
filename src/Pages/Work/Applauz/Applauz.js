import './Applauz.css'
import '../Work.css'

import applauz_hero from '../../../img/portfolioAssets/Applauz/applauz_hero.png'

export default function Applauz () {
  return (
    <div class='Work' id='Applauz'>
      <section className='intro'>
        <div className='header'>
          <h1>Applauz</h1>
          <h2>Social employee recognition and management tool (NDA)</h2>
          <div className='chips'>
            <p>Web</p>
            <p>Desktop</p>
            <p>Mobile app</p>
          </div>
        </div>
        <img
          className='hero'
          src={applauz_hero}
          alt='applauz desktop webpages'
        />

        <div className='info'>
          <p className='title'>Disclosure</p>
          <p>
            Since all content of this project is confidential, I'm happy to
            provide more information verbally during the interview. I may only
            be able to discuss my role and general responsibilities.
          </p>
          <div className='grid'>
            <div>
              <p className='subTitle'>My role</p>
              <p>Full Stack Developer</p>
              <p>Build an updated administrative panel from the ground-up.</p>
              <p>
                Updating and maintaining components, resolving bugs, tickets,
                technical debt.
              </p>
            </div>
            <div>
              <p className='subTitle'>Project scope</p>
              <p>Established, privately owned startup with 20-25 employees.</p>
            </div>
            <div>
              <p className='subTitle'>Tools</p>
              <p>
                Figma, ReactJS, NodeJS, Javascript, Amazon AWS S3, OAuth 2.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
