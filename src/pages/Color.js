import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setColor } from 'reducers/Car/'
import { tookAStep } from 'reducers/Steps/'
import NavBar from 'components/NavBar/NavBar'
import ColorBody from 'components/ColorBody/ColorBody'
import FooterContainer from 'components/Footer/FooterContainer'

class Color extends Component {

  componentDidMount = () => this.props.tookAStep(2)

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
        <FooterContainer to="/wheels" />
      </div>
    )
  }
}

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  setColor: id => dispatch(setColor(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(Color)
