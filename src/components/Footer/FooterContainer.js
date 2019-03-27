import React, { Component } from 'react'
import { connect } from 'react-redux'

import { dots, wheelsImages } from 'utils/images'
import Footer from './Footer'

class FooterContainer extends Component {

  render = () => {
    const { to, currentStep } = this.props,
          { selectedEngine, engine, price,
            selectedColor, color,
            selectedWheels, wheels } = this.props.carData

    return (
      <Footer 
        to={to}
        total={price 
          + engine.items[selectedEngine-1].price
          + color.items[selectedColor-1].price
          + wheels.items[selectedWheels-1].price}
        currentStep={currentStep}
        engine={engine.items[selectedEngine-1]}
        color={dots[selectedColor-1]}
        wheels={wheelsImages[selectedWheels-1]} />
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer, currentStep: state.stepsReducer.currentStep })

export default connect(mapStateToProps)(FooterContainer)