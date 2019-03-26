import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setEngine } from 'reducers/Car/actionCreators'
import { tookAStep } from 'reducers/Steps/actionCreators'
import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import FooterContainer from 'components/Footer/FooterContainer'

class Engine extends Component {

  componentDidMount = () => this.props.tookAStep(1)

  onSelectEngine = engineSelected => this.props.setEngine(engineSelected)

  render = () => {
    const { engine, selectedEngine } = this.props.carData

    return (
      <div className="main--container">
        <NavBar />
        <EngineBody 
          onSelectEngine={this.onSelectEngine}
          engines={engine.items}
          selectedEngine={selectedEngine} />
        <FooterContainer to="/color" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  setEngine: id => dispatch(setEngine(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(Engine)
