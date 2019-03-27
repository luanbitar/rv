import { SET_LOADING } from './loadingsReducer'

export const isLoading = (isLoading, key = undefined) => ({
  type: SET_LOADING,
  isLoading,
  key
})