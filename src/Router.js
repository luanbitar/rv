import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'src/pages/Home'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
  </BrowserRouter>
)

export default Router