import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import FooterContainer from 'components/Footer/FooterContainer'

const Engine = () =>
  <div className="main--container">
    <NavBar />
    <EngineBody />
    <FooterContainer to="/color" />
  </div>

export default Engine
