import React from 'react'

import CarEnhancer from 'enhancers/Car'
import NavBar from 'components/NavBar/NavBar'
import EngineBody from 'components/EngineBody/EngineBody'
import FooterContainer from 'components/Footer/FooterContainer'

const Engine = ({ carData, setEngine, tookAStep}) =>
  <div className="main--container">
    <NavBar />
    <EngineBody 
      onSelectEngine={setEngine}
      engines={carData.engine.items}
      selectedEngine={carData.selectedEngine} />
    <FooterContainer to="/color" />
  </div>

export default CarEnhancer(Engine)
