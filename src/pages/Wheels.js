import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as carActions from 'reducers/Car/actionCreators'
import NavBar from 'components/NavBar/NavBar'
import WheelsBody from 'components/WheelsBody/WheelsBody'
import Footer from 'components/Footer/Footer'

class Wheels extends Component {

  onSelectWheels = selectedWheels => this.props.setWheels(selectedWheels)

  render = () => {
    const { wheels, selectedWheels } = this.props.carData

    return (
      <div className="main--container">
        <NavBar />
        <WheelsBody
          onSelectWheels={this.onSelectWheels}
          wheels={wheels.items}
          selectedWheels={selectedWheels} />
        <Footer to="/result" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wheels)
