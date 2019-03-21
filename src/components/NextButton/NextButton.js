import React from 'react'
import { Link } from 'react-router-dom'

import s from './NextButton.css'
import ArrowRight from 'images/arrow.svg'

const NextButton = ({ to, children }) => (
  <Link className={s.advance} to={to}>
    {children}
    <img src={ArrowRight} alt="Arrow right" />
  </Link>
);

export default NextButton;