import React from 'react'
import { Link } from 'react-router-dom'

import s from 'styles/button.scss'
import Redo from 'images/rebuild.svg'

const ButtonRedo = ({ to, children }) => (
  <Link className={s.container} to={to}>
    {children}
    <img className="icon" src={Redo} alt="Rebuild" />
  </Link>
);

export default ButtonRedo;