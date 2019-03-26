import { combineReducers } from 'redux'

import carReducer from 'reducers/Car/carReducer'
import stepsReducer from 'reducers/Steps/stepsReducer'

export default combineReducers({
  carReducer,
  stepsReducer
})
