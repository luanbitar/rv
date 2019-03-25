import React, { Component } from 'react'

import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import Footer from 'components/Footer/Footer'
import { connect } from 'react-redux'

class Engine extends Component {

  state = { engineSelected: null }

  onSelectEngine = engineSelected => this.setState({ engineSelected })
  // onSelectEngine = engineSelected => console.log(engineSelected)

  render = () => {
    const { engine } = this.props.carData,
          { engineSelected } = this.state

    return (
      <div className="main--container">
        <NavBar />
        <EngineBody 
          onSelectEngine={this.onSelectEngine}
          engines={engine.items}
          engineSelected={engineSelected} />
        <Footer to="/color" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.CarReducer })

export default connect(mapStateToProps)(Engine)