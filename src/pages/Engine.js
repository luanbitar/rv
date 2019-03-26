import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as carActions from 'reducers/Car/actionCreators'
import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import Footer from 'components/Footer/Footer'


class Engine extends Component {

  state = { engineSelected: 1 }

  onSelectEngine = engineSelected => {
    this.setState({ engineSelected })
    this.props.setEngine(engineSelected)
  }

  render = () => {
    const { engine, selectedEngine } = this.props.carData

    return (
      <div className="main--container">
        <NavBar />
        <EngineBody 
          onSelectEngine={this.onSelectEngine}
          engines={engine.items}
          selectedEngine={selectedEngine} />
        <Footer to="/color" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Engine)