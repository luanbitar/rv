import { SET_CAR_DATA } from './actions'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
