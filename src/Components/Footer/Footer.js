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
          <Link to='mailto: jc.castagne96@gmail.com' target='_blank'>
            Email
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>

          <Link to='https://www.linkedin.com/in/jc-castagne/' target='_blank'>
            LinkedIn
            <img src={arrow_top_right_white} alt='arrow top right' />
          </Link>
          <Link to='https://www.instagram.com/jc.castagne/' target='_blank'>
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
          <p>Jean-Christophe Castagne &copy; 2023</p>
        </section>
        <section className='right'>
          <img src={JC_logo_white} alt='jc logo' />

          <span>
            <img src={star_white} alt='star' />
            <img src={star_white} alt='star' />
            <img src={star_white} alt='star' />
            <img src={star_white} alt='star' />
            <img src={star_white} alt='star' />
            <p>
              100% rated on{' '}
              <Link to='https://www.fiverr.com/jccastagne' target='_blank'>
                Fiverr.com
              </Link>
            </p>
          </span>
        </section>
      </div>
    </footer>
  )
}
