import { SET_STEP_VALUE, RESET_SELECTIONS } from './actions'

export const selected = (step, value) => ({
  type: SET_STEP_VALUE,
  step,
  value
})

export const resetSelections = () => ({
  type: RESET_SELECTIONS
})

