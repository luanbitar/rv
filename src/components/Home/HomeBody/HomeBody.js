import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import s from './HomeBody.scss'
import CarImage from 'images/car-home.png'
import ButtonNext from 'components/ButtonNext/ButtonNext'
import { fetchData } from 'utils/fetch'
import * as carActions from 'reducers/Car/actionCreators'

class HomeBody extends Component {

  state = { data: {} }

  componentDidMount = async () => {
    const result = await fetchData()
    this.props.getCarData(result.data)
    console.log(this.props)

  }

  render = () =>
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
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody)
