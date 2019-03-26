import { SET_CAR_DATA, SET_ENGINE, SET_COLOR, SET_WHEELS } from './actions'

export const setCarData = payload => ({
  type: SET_CAR_DATA,
  payload
})

export const setEngine = payload => ({
  type: SET_ENGINE,
  payload
})

export const setColor = payload => ({
  type: SET_COLOR,
  payload
})

export const setWheels = payload => ({
  type: SET_WHEELS,
  payload
})
