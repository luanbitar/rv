import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as carActions from 'reducers/Car/actionCreators'

import NavBar from 'components/NavBar/NavBar'
import ResultBody from 'components/ResultBody/ResultBody'

class Result extends Component {

  onRebuild = () => this.props.resetSelection()

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

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)
