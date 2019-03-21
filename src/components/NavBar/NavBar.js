import React from 'react'
import RVLogo from 'images/RV-logo.svg'
import s from './NavBar.css'

const NavBar = () => (
  <div className={s.container}>
    <a href="https://www.redventures.com/">
      <img src={RVLogo} alt="Red Ventures logo" />
    </a>
    <ul className={s.menu}>
      <li className={[s.option, s.active].join(' ')}>
        Model R
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
)

export default NavBar