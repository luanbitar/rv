import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as carActions from 'reducers/Car/actionCreators'
import NavBar from 'components/NavBar/NavBar'
import ColorBody from 'components/ColorBody/ColorBody'
import Footer from 'components/Footer/Footer'

class Color extends Component {

  onSelectColor = colorSelected => this.props.setColor(colorSelected)

  render = () => {
    const { color, selectedColor } = this.props.carData
    return (
      <div className="main--container">
        <NavBar />
        <ColorBody
          onSelectColor={this.onSelectColor}
          selectedColor={selectedColor}
          colors={color} />
        <Footer to="/wheels" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.CarReducer })

const mapDispatchToProps = dispatch => bindActionCreators(carActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Color)
