import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resetSelection as resetOptions } from 'reducers/Car/'
import { resetSelections as resetSteps } from 'reducers/Steps/'

import NavBar from 'components/NavBar/NavBar'
import ResultBody from 'components/ResultBody/ResultBody'

class Result extends Component {

  onRebuild = () => {
    this.props.resetOptions()
    this.props.resetSteps()
  }

  render = () => {
    const { price,
      selectedEngine, engine,
      selectedColor, color,
      selectedWheels, wheels } = this.props.carData

    return (
      <div className="main--container">
        <NavBar />
        <ResultBody price={price}
          engine={engine.items[selectedEngine-1]}
          color={color.items[selectedColor-1]}
          wheels={wheels.items[selectedWheels-1]}
          total={price 
               + engine.items[selectedEngine-1].price
               + color.items[selectedColor-1].price
               + wheels.items[selectedWheels-1].price}
          onRebuild={this.onRebuild} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  resetOptions: () => dispatch(resetOptions()),
  resetSteps: () => dispatch(resetSteps())
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)
