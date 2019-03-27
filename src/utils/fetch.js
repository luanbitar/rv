import { setCarData } from 'reducers/Car/'
import { isLoading } from 'reducers/Loadings'

export const apiUrl = 'https://next.json-generator.com/api/json/get/41ORKNZDU'

export const fetchData = async (url = apiUrl) =>
  await (await fetch(url)).json()
  
export const getCarData = async dispatch => {

  dispatch(isLoading(true, 'car'))
  const { data } = await fetchData()
  
  // TODO: change image keys to image files
  
  dispatch(setCarData(data))
  dispatch(isLoading(false, 'car'))
}
