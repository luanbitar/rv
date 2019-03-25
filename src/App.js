import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Routes from './Routes'
import { fetchData } from 'utils/fetch'
import * as carActions from 'reducers/Car/actionCreators'

class App extends Component {

  componentDidMount = async () => {
    const result = await fetchData()
    this.props.getCarData(result.data)
    console.log(this.props)
  }

  render = () =>
    <Routes />
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
