import initialState from './initialState'
import { SET_LOADING } from './actions'

export default (state = initialState, { type, isLoading, key }) => {
  switch (type) {
    case SET_LOADING:
      let copy = { ...state } || {}
      if(key) copy[key] = { isLoading }
      else copy = { isLoading }
      return {
        ...state,
        ...copy
      }
    default: 
     return state
  }
}