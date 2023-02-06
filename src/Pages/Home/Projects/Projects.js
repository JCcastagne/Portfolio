import { Link } from 'react-router-dom'

import './Projects.css'
import arrow_top_right from '../../../img/icons/arrow_top_right.svg'

export default function Projects () {
  return (
    <div class='Projects'>
      <Link to='work/vuzec' className='project'>
        <div className='title'>
          <p>Vuzec</p>
          <img src={arrow_top_right} alt='arrow top right' />
        </div>
        <p>Web3 asset trading platform</p>
      </Link>

      <Link to='work/vuzec' className='project'>
        <div className='title'>
          <p>Applauz (NDA)</p>
          <img src={arrow_top_right} alt='arrow top right' />
        </div>
        <p>HR recognition tool</p>
      </Link>

      <Link to='work/vuzec' className='project'>
        <div className='title'>
          <p>Fiverr</p>
          <img src={arrow_top_right} alt='arrow top right' />
        </div>
        <p>Freelance UI/UX design</p>
      </Link>

      <Link to='work/vuzec' className='project'>
        <div className='title'>
          <p>SmartTenant</p>
          <img src={arrow_top_right} alt='arrow top right' />
        </div>
        <p>Social property management</p>
      </Link>
    </div>
  )
}
