export const SET_LOADING = 'SET_LOADING'

export default (state = {}, { type, isLoading, key }) => {
  switch (type) {
    case SET_LOADING:
      let copy = { ...state } || {}
      if(key) copy[key] = { isLoading }
      else copy = { isLoading }
      return {
        ...state,
        ...copy
      }
    default: 
     return state
  }
}