import React from 'react'

import EngineEnhancer from 'enhancers/Engine'
import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import FooterContainer from 'components/Footer/FooterContainer'

const Engine = ({ engines, setEngine, selectedEngine, engineSrc }) =>
  <div className="main--container">
    <NavBar />
    <EngineBody 
      onSelectEngine={setEngine}
      engines={engines}
      engineSrc={engineSrc}
      selectedEngine={selectedEngine} />
    <FooterContainer to="/color" />
  </div>

export default EngineEnhancer(Engine)
