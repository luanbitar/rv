import React from 'react'

import s from './HomeFooter.css'
import FooterOption from '../FooterOption/FooterOption'

const HomeFooter = () => (
  <div className={s.container}>
    <FooterOption value="2.5" unit="s" desc="From 0 to 100" />
    <FooterOption value="420" unit="mi" desc="Miles range" />
    <FooterOption value="250" unit="mp/h" desc="Max speed" />
  </div>
);

export default HomeFooter