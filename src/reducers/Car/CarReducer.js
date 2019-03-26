import { SET_CAR_DATA, SET_ENGINE, SET_COLOR, SET_WHEELS } from './actions'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_ENGINE:
      return {
        ...state,
        selectedEngine: action.payload
      }
    case SET_COLOR:
      return {
        ...state,
        selectedColor: action.payload
      }
    case SET_WHEELS:
      return {
        ...state,
        selectedWheels: action.payload
      }
    default:
      return state
  }
}
