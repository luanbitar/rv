import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import Footer from 'components/Footer/Footer'

const Engine = () =>
  <div className="main--container">
    <NavBar />
    <EngineBody field="engine" selectedField="selectedEngine" />
    <Footer currentStep={1} to="/color" />
  </div>

export default Engine
