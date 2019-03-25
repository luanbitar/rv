import { GET_CAR_DATA } from './actions'

export const getCarData = payload => {
  return {
    type: GET_CAR_DATA,
    payload
  }
}
