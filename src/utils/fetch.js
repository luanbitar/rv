import { setCarData } from 'reducers/Car/'

import { changeImageFieldToLocalPath } from 'utils/carData'

export const apiUrl = 'https://next.json-generator.com/api/json/get/41ORKNZDU'

export const fetchData = async (url = apiUrl) =>
  await (await fetch(url)).json()
  
export const getCarData = async dispatch => {

  const { data } = await fetchData()
  
  // change image URL's to local path with minified png's
  const dataWithLocalPaths = changeImageFieldToLocalPath(data)

  dispatch(setCarData(dataWithLocalPaths))
}
