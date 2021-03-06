import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import ColorBody from 'components/ColorBody/ColorBody'
import Footer from 'components/Footer/Footer'

const Color = () =>
  <div className="main--container">
    <NavBar />
    <ColorBody field="color" selectedField="selectedColor"/>
    <Footer currentStep={2} to="/wheels"/>
  </div>

export default Color