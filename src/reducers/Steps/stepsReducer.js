import { TOOK_A_STEP, SET_STEP_VALUE, RESET_SELECTIONS } from './actions'
import initialState from './initialState'

export default (state = initialState, { type, step, value }) => {
  switch (type) {
    case TOOK_A_STEP:
      return {
        ...state,
        currentStep: step
      }
    case SET_STEP_VALUE:
      let copy = { ...state } || {}
      copy[step] = value
      return {
        ...state,
        ...copy
      }
    case RESET_SELECTIONS:
      return {
        ...state,
        currentStep: initialState.currentStep
      }
    
    default:
      return state
  }
}
