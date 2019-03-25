export const apiUrl = 'https://next.json-generator.com/api/json/get/41ORKNZDU'

export const fetchData = async (url = apiUrl) =>
  await (await fetch(url)).json()