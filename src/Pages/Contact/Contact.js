import './Contact.css'
import { Link } from 'react-router-dom'

import arrow_top_right_light from '../../img/icons/arrow_top_right_light.svg'
import contact_hero_colored from '../../img/contact_hero_colored.svg'

export default function Contact () {
  return (
    <div class='Contact'>
      <img src={contact_hero_colored} alt='contact' className='contact_hero' />

      <div className='details'>
        <section className='left' id='links'>
          <a href='mailto:jc.castagne96@gmail.com'>
            Email
            <img src={arrow_top_right_light} alt='arrow top right' />
          </a>
          <Link to='https://instagram.com/jc.castagne/' target='_blank'>
            Instagram
            <img src={arrow_top_right_light} alt='arrow top right' />
          </Link>
          <Link to='https://linkedin.com/in/jc-castagne/' target='_blank'>
            LinkedIn
            <img src={arrow_top_right_light} alt='arrow top right' />
          </Link>
          <Link to='https://www.fiverr.com/jccastagne' target='_blank'>
            Fiverr
            <img src={arrow_top_right_light} alt='arrow top right' />
          </Link>
        </section>

        <section className='right' id='copyright'>
          <p>Ottawa, Ontario, Canada</p>
          <p>{`45°25'15.16'' N, 75°41'24.395'' W`}</p>
        </section>
      </div>
    </div>
  )
}
