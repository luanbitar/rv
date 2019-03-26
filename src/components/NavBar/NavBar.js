import React from 'react'
import { Link } from 'react-router-dom'

import s from './NavBar.scss'
import RVLogo from 'images/RV-logo.svg'

const NavBar = () => 
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <a href="https://www.redventures.com/">
        <img src={RVLogo} alt="Red Ventures logo" />
      </a>
      <ul className="menu">
        <li className="option active">
          <Link to="/">
            Model R
          </Link>
        </li>
        <li className="option">
          Model IQ
        </li>
        <li className="option">
          Model Mobi
        </li>
        <li className="option">
          Model Charlie
        </li>
        <li className="option">
          Model Italy
        </li>
      </ul>
    </div>
  </div>

export default NavBar