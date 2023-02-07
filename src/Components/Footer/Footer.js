import './Footer.css'
import { Link } from 'react-router-dom'

import JC_logo_white from '../../img/JC_logo_white.svg'
import star_white from '../../img/icons/star_white.svg'
import arrow_top_right_white from '../../img/icons/arrow_top_right_white.svg'

export default function Footer () {
  return (
    <footer class='Footer'>
      <div className='container'>
        <section className='left'>
          <a href='mailto:jc.castagne96@gmail.com'>
            Email
            <img src={arrow_top_right_white} alt='arrow top right' />
          </a>

          <Link to='https://linkedin.com/in/jc-castagne/' target='_blank'>
            LinkedIn
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
          <Link to='https://instagram.com/jc.castagne/' target='_blank'>
            Instagram
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
          <Link to='https://github.com/JCcastagne' target='_blank'>
            Github
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
          <Link to='https://dribbble.com/jccastagne' target='_blank'>
            Dribbble
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
          <Link to='https://jccastagne.hashnode.dev/' target='_blank'>
            Blog
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
        </section>
        <section className='right'>
          <img src={JC_logo_white} alt='jc logo' />
          <p>Jean-Christophe Castagne &copy; 2023</p>
        </section>
      </div>
    </footer>
  )
}
