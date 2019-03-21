import React from 'react'

import s from './HomeBody.css'
import CarImage from 'images/car-home.png'
import NextButton from '../../NextButton/NextButton';

const HomeBody = () => (
  <div className={s.container}>
    <div className={s.section}>
      <h2 className={s.title}>Build your</h2>
      <h1 className={s.subTitle}>Model <span>R</span></h1>
    </div>
    <img className={s.carImage} src={CarImage} alt="Car red" />
    <div  className={s.btn}>
      <NextButton to="/others">
        <span className={s.advance}>Begin</span>
      </NextButton>
    </div>
  </div>
)

export default HomeBody