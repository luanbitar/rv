import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBar from 'components/NavBar/NavBar'
import HomeBody from 'components/Home/HomeBody/HomeBody'
import HomeFooter from '../components/Home/HomeFooter/HomeFooter'
import { fetchData } from 'utils/fetch'
import * as carActions from 'reducers/Car/actionCreators'

class Home extends Component {

  state = {  }

  componentDidMount = async () => {
    const result = await fetchData()
    this.props.getCarData(result.data)
    console.log(this.props)
  }

  render = () => 
    <div className="main--container">
      <NavBar />
      <HomeBody />
      <HomeFooter />
    </div>
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)