import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setWheels } from 'reducers/Car/actionCreators'
import { tookAStep } from 'reducers/Steps/actionCreators'
import NavBar from 'components/NavBar/NavBar'
import WheelsBody from 'components/WheelsBody/WheelsBody'
import FooterContainer from 'components/Footer/FooterContainer'

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
        <FooterContainer to="/result" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  setWheels: id => dispatch(setWheels(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wheels)
