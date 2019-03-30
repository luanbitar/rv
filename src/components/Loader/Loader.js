import React from 'react'

import s from './Loader.scss'

const Loader = () =>
  <div className={`${s.container} loader--container`}>
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

export default Loader