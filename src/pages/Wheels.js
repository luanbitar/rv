import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setWheels } from 'reducers/Car/'
import NavBar from 'components/NavBar/NavBar'
import WheelsBody from 'components/WheelsBody/WheelsBody'
import Footer from 'components/Footer/Footer'

class Wheels extends Component {

  componentDidMount = () => this.props.tookAStep(3)
  
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
        <Footer currentStep={3} to="/result" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  setWheels: id => dispatch(setWheels(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wheels)
