import React from 'react'
import { Link } from 'react-router-dom'

import s from 'styles/button.scss'
import ArrowRight from 'images/arrow.svg'

const ButtonNext = ({ to, children }) => 
  <Link className={s.container} to={to}>
    {children}
    <img className="icon next-icon" src={ArrowRight} alt="Arrow right" />
  </Link>

export default ButtonNext