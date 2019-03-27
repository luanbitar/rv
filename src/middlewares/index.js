import { compose, applyMiddleware } from 'redux'

import totalMiddleware from 'middlewares/total'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancer(applyMiddleware(totalMiddleware))