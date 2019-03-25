import { GET_CAR_DATA } from './actions'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_DATA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
