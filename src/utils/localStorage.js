const prefix = 'RV_'

export const setItem = (key, value) => localStorage.setItem(prefix+key, JSON.stringify(value))

export const getItem = key => JSON.parse(localStorage.getItem(prefix+key))
