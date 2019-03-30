import { compose, applyMiddleware } from 'redux'

import localStorage from 'middlewares/localStorage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancer(applyMiddleware(localStorage))