import React from 'react'

import s from './NavBar.css'
import RVLogo from 'images/RV-logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div className={s.container}>
    <div className={s.limitWidthContainer}>
      <a href="https://www.redventures.com/">
        <img src={RVLogo} alt="Red Ventures logo" />
      </a>
      <ul className={s.menu}>
        <li className={[s.option, s.active].join(' ')}>
          <Link to="/">
            Model R
          </Link>
        </li>
        <li className={s.option}>
          Model IQ
        </li>
        <li className={s.option}>
          Model Mobi
        </li>
        <li className={s.option}>
          Model Charlie
        </li>
        <li className={s.option}>
          Model Italy
        </li>
      </ul>
    </div>
  </div>
)

export default NavBar