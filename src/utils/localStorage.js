const prefix = 'RV_'

export const setItem = (key, value) => localStorage.setItem(prefix+key, JSON.stringify(value))

export const getItem = key => JSON.parse(localStorage.getItem(prefix+key))

export const clearSteps = () => {
  removeItem('selectedEngine')
  removeItem('selectedColor')
  removeItem('selectedWheels')
}

const removeItem = key => localStorage.removeItem(prefix+key)