import React from 'react'

import NavBar from 'components/NavBar/NavBar'
import ResultBody from 'components/ResultBody/ResultBody'

const Result = () =>
  <div className="main--container">
    <NavBar />
    <ResultBody field="results" selectedField="selectedColor" />
  </div>

export default Result
