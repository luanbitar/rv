import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Home from 'pages/Home'
import Engine from './pages/Engine'

const Routes = () => (
  <Router>
    <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" component={Home} exact />
        <Route path="/engine" component={Engine} />
      </AnimatedSwitch>
  </Router>
)

export default Routes