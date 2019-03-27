import { TOOK_A_STEP, SET_STEP_VALUE, RESET_SELECTIONS } from './actions'

export const tookAStep = step => ({
  type: TOOK_A_STEP,
  step
})

export const selected = (step, value) => ({
  type: SET_STEP_VALUE,
  step,
  value
})

export const resetSelections = () => ({
  type: RESET_SELECTIONS
})

