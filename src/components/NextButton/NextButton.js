import React from 'react'
import { Link } from 'react-router-dom'

import s from './NextButton.scss'
import ArrowRight from 'images/arrow.svg'

const NextButton = ({ to, children }) => (
  <Link className={s.container} to={to}>
    {children}
    <img src={ArrowRight} alt="Arrow right" />
  </Link>
);

export default NextButton;