import { Link } from 'react-router-dom'
import Atropos from 'atropos/react'

import './Projects.css'
import 'atropos/css'

import arrow_top_right from '../../../img/icons/arrow_top_right.svg'
import arrow_top_right_light from '../../../img/icons/arrow_top_right_light.svg'

export default function Projects () {
  return (
    <div class='Projects'>
      <Atropos activeOffset={40} shadowScale={1.05} className='hoverContainer'>
        <Link to='work/vuzec' className='project' id='Vuzec'>
          <div className='title'>
            <p>Vuzec</p>
            <img src={arrow_top_right_light} alt='arrow top right' />
          </div>
          <div class='chips'>
            <p>Dev</p>
            <p>Design</p>
            <p>App</p>
          </div>
          <p>Web3 asset trading platform</p>
        </Link>
      </Atropos>

      <Atropos activeOffset={40} shadowScale={1.05} className='hoverContainer'>
        <Link to='work/applauz' className='project' id='Applauz'>
          <div className='title'>
            <p>Applauz (NDA)</p>
            <img src={arrow_top_right_light} alt='arrow top right' />
          </div>
          <div class='chips'>
            <p>Dev</p>
            <p>App</p>
            <p>Web</p>
          </div>
          <p>Social HR tool</p>
        </Link>{' '}
      </Atropos>

      <Atropos activeOffset={40} shadowScale={1.05} className='hoverContainer'>
        <Link to='work/fiverr' className='project' id='Fiverr'>
          <div className='title'>
            <p>Fiverr</p>
            <img src={arrow_top_right_light} alt='arrow top right' />
          </div>
          <div class='chips'>
            <p>Design</p>
            <p>App</p>
            <p>App</p>
          </div>
          <p>Freelance UI/UX design</p>
        </Link>{' '}
      </Atropos>

      <Atropos activeOffset={40} shadowScale={1.05} className='hoverContainer'>
        <Link to='work/smarttenant' className='project' id='SmartTenant'>
          <div className='title'>
            <p>SmartTenant</p>
            <img src={arrow_top_right} alt='arrow top right' />
          </div>
          <div class='chips'>
            <p>App</p>
            <p>Design</p>
            <p>Dev</p>
          </div>
          <p>Social property management</p>
        </Link>{' '}
      </Atropos>
    </div>
  )
}
