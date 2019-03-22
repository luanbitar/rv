import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Engine from './pages/Engine'

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/engine" component={Engine} />
  </BrowserRouter>
)

export default Routes