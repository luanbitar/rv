import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import WheelsBody from 'components/WheelsBody/WheelsBody'
import Footer from 'components/Footer/Footer'

const Wheels = () =>
  <div className="main--container">
    <NavBar />
    <WheelsBody field="wheels" selectedField="selectedWheels" />
    <Footer currentStep={3} to="/result" />
  </div>

export default Wheels