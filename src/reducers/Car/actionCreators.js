import { GET_CAR_DATA } from './actions'

export const getCarData = data => {
  return {
    type: GET_CAR_DATA,
    data
  }
}
