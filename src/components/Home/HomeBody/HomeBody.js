import React from 'react'

import s from './HomeBody.scss'
import CarImage from 'images/car-home.png'
import ButtonNext from 'components/ButtonNext/ButtonNext'

const HomeBody = () => 
  <div className={s.container}>
  <div className="section">
    <h2 className="title">Build your</h2>
    <h1 className="subTitle">Model <span>R</span></h1>
  </div>
  <img className="carImage" src={CarImage} alt="Car red" />
  <div className="btn">
    <ButtonNext to="/engine">
      <span className="advance">Begin</span>
    </ButtonNext>
  </div>
  </div>

export default HomeBody
