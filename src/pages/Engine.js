import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import Footer from 'components/Footer/Footer'

const Engine = () => (
  <div className="main--container">
    <NavBar />
    <EngineBody />
    <Footer to="/color" />
  </div>
)

export default Engine