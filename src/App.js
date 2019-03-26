import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as carActions from 'reducers/Car/actionCreators'
import Routes from './Routes'
import { fetchData } from 'utils/fetch'

class App extends Component {

  componentDidMount = async () => {
    const result = await fetchData()
    this.props.setCarData(result.data)
  }

  render = () =>
    <Routes />
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
