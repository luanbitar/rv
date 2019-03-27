import { TOOK_A_STEP, RESET_SELECTIONS } from './actions'

export const tookAStep = step => ({
  type: TOOK_A_STEP,
  step
})

export const resetSelections = () => ({
  type: RESET_SELECTIONS
})

