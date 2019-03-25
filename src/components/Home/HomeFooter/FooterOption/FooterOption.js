import React from 'react'

import s from './FooterOptions.scss'

const FooterOption = ({ value, unit, desc }) => (
  <div className={s.container}>
    <h1 className="value">{value} <span className="unit">{unit}</span></h1>
    <p className="description">{desc}</p>
  </div>
)

export default FooterOption