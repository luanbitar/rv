import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import middlewares from 'middlewares/'
import * as serviceWorker from './serviceWorker'
import 'styles/index.scss'
import App from './App'
import reducers from './reducers'

const store = createStore(
  reducers,
  middlewares
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
