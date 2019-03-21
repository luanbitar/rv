import React from 'react'
import RVLogo from 'images/RV-logo.svg'
import s from './NavBar.css'

const NavBar = () => (
  <div className={s.container}>
    <img src={RVLogo} alt="Red Ventures logo" />
    <div className={s.menu}>
      <div className={[s.option, s.active].join(' ')}>
        <span>Model R</span>
      </div>
      <div className={s.option}>
        <span>Model IQ</span>
      </div>
      <div className={s.option}>
        <span>Model MOBI</span>
      </div>
      <div className={s.option}>
        <span>Model Charlie</span>
      </div>
      <div className={s.option}>
        <span>Model Italy</span>
      </div>
    </div>
  </div>
)

export default NavBar