import { SET_LOADING } from './actions'

export const isLoading = (isLoading, key = undefined) => ({
  type: SET_LOADING,
  isLoading,
  key
})