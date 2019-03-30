import { SET_CAR_DATA } from 'reducers/Car/actions'
import { SET_STEP_VALUE, RESET_SELECTIONS } from 'reducers/Steps/actions'
import { setItem, getItem } from 'utils/localStorage'

const storage = store => next => action => {
  const { type, value, step, payload } = action
  
  if(type === SET_CAR_DATA) setItem('carData', payload)
  if(type === SET_STEP_VALUE) setItem(step, value)
  else if(type === RESET_SELECTIONS) localStorage.clear()
  
  next(action)
}

export default storage