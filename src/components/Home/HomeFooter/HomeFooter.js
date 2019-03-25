import React from 'react'

import s from './HomeFooter.scss'
import FooterOption from './FooterOption/FooterOption'

const HomeFooter = () => 
  <div className={s.container}>
    <div className="limitWidth">
      <FooterOption value="2.5" unit="s" desc="From 0 to 100" />
      <FooterOption value="420" unit="mi" desc="Miles range" />
      <FooterOption value="250" unit="mp/h" desc="Max speed" />
    </div>
  </div>

export default HomeFooter