import './Resume.css'

import { Link } from 'react-router-dom'

import resume_hero_colored from '../../img/resume_hero_colored.svg'
import arrow_top_right_light from '../../img/icons/arrow_top_right_light.svg'

export default function Resume () {
  return (
    <div class='Resume'>
      <img src={resume_hero_colored} alt='resume' className='resume_hero' />

      <div className='details'>
        <div className='side'>
          <section className='education'>
            <p className='header'>Education</p>
            <div className='title'>
              <div>
                <p className='name'>
                  Algonquin College of Applied Arts and Technology
                </p>
              </div>
              <p className='date'>Class of 2022</p>
            </div>
            <ul>
              <li>
                Mobile Application Development and Design, Business Mobile
                Industry, Positive Psychology
              </li>
              <li>{`(GPA 4.0)`}</li>
            </ul>
          </section>

          <section className='skills'>
            <p className='header'>Skills</p>
            <ul>
              <li>Full-Stack Development</li>
              <li>UI/UX Design and Development</li>
              <li>Communication and collaboration</li>
              <li>Working in agile and scrum-based environments</li>
            </ul>
          </section>

          <section className='technical-skills'>
            <p className='header'>Technical</p>
            <ul>
              <li>React Native, ReactJS, NextJS</li>
              <li>NodeJS, ExpressJS, MongoDB, Firebase</li>
              <li>HTML, CSS, SASS, Javascript</li>
              <li>Web3, EthersJS</li>
              <li>Figma, Adobe XD, Photoshop, Illustrator</li>
              <li>
                Visual design, interactive prototyping, wireframing, user flows,
                mockups
              </li>
              <li>
                User research, usability testing, information architecture
              </li>
            </ul>
          </section>

          <section className='download'>
            <p className='header'>Download</p>
            <Link
              to='https://drive.google.com/drive/folders/1PyRM405cnmUgB1yCpyKRiSmM863IQ-6H?usp=share_link'
              target='_blank'
            >
              Download PDF <img src={arrow_top_right_light} alt='arrow' />
            </Link>
          </section>
        </div>

        <div className='side'>
          <section className='work'>
            <p className='header'>Work</p>

            <div className='jobs'>
              <div className='job'>
                <div className='title'>
                  <div>
                    <p className='name'>Applauz</p>
                    <p className='position'>Full Stack Developer</p>
                  </div>
                  <p className='date'>Nov 2022 — Jan 2023</p>
                </div>
                <p>
                  Resolve various bugs across web and mobile application,
                  implement new features and improve existing functionality.
                  Create administrative dashboard solution to manage customer
                  data.
                </p>
              </div>

              <div className='job'>
                <div className='title'>
                  <div>
                    <p className='name'>Vuzec</p>
                    <p className='position'>
                      Senior Frontend Developer & UI/UX Designer
                    </p>
                  </div>
                  <p className='date'>May 2022 — Oct 2022</p>
                </div>
                <p>
                  Fully model and develop custom web3 applications for buying,
                  selling and exchanging financial assets. Fully engineer UI/UX
                  prototypes for company solutions. Create React/NextJS trading
                  application; fully reusable and responsive components, custom
                  form scripts, custom hooks.
                </p>
              </div>

              <div className='job'>
                <div className='title'>
                  <div>
                    <p className='name'>InteliDevs</p>
                    <p className='position'>
                      Design Lead and Full Stack Developer
                    </p>
                  </div>
                  <p className='date'>Jan 2021 — Apr 2022</p>
                </div>
                <p>
                  With a team, developed an Android/iOS social media app to help
                  tenants connect with each other. Guide team through full UI/UX
                  process including research, information architecture, user
                  flow, wireframing, prototyping, testing and iterations.
                </p>
              </div>

              <div className='job'>
                <div className='title'>
                  <div>
                    <p className='name'>Fiverr</p>
                    <p className='position'>Freelance UI/UX Designer</p>
                  </div>
                  <p className='date'>Apr 2021 — May 2022</p>
                </div>
                <p>
                  With a team, developed an Android/iOS social media app to help
                  tenants connect with each other. Guide team through full UI/UX
                  process including research, information architecture, user
                  flow, wireframing, prototyping, testing and iterations.
                </p>
              </div>
            </div>
          </section>

          <section className='awards-achievements'>
            <p className='header'>Awards</p>

            <div className='awards'>
              <div className='award'>
                <div className='title'>
                  <div>
                    <p className='position'>
                      Algonquin College ReAction 2022 Showcase Awards - 1st
                      Place winner
                    </p>
                  </div>
                  <p className='date'>Apr 2022</p>
                </div>
              </div>

              <div className='award'>
                <div className='title'>
                  <div>
                    <p className='position'>
                      Dean’s Honour List for Academic Excellence - 4/4
                    </p>
                  </div>
                  <p className='date'>2020-2022</p>
                </div>
              </div>

              <div className='award'>
                <div className='title'>
                  <div>
                    <p className='position'>Class Representative</p>
                  </div>
                  <p className='date'>Jan 2021, Sept 2021, Jan 2022</p>
                </div>
              </div>

              <div className='award'>
                <div className='title'>
                  <div>
                    <p className='position'>ESL Teaching Certificate - TESOL</p>
                  </div>
                  <p className='date'>2018</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
