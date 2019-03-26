import { TOOK_A_STEP, RESET_SELECTIONS } from './actions'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case TOOK_A_STEP:
      return {
        ...state,
        currentStep: action.step
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
