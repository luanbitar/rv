import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Home from 'pages/Home'
import Engine from 'pages/Engine'
import Color from 'pages/Color'
import Wheels from 'pages/Wheels'
import Result from 'pages/Result'

const Routes = () => (
  <Router>
    <AnimatedSwitch className="switch-wrapper"
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}>
        <Route path="/" component={Home} exact />
        <Route path="/engine" component={Engine} />
        <Route path="/color" component={Color} />
        <Route path="/wheels" component={Wheels} />
        <Route path="/result" component={Result} />
      </AnimatedSwitch>
  </Router>
)

export default Routes