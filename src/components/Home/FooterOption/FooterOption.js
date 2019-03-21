import React from 'react'

import s from './FooterOptions.css'

const FooterOption = ({ value, unit, desc }) => (
  <div className={s.container}>
    <h1>{value} <span>{unit}</span></h1>
    <p>{desc}</p>
  </div>
);

export default FooterOption;