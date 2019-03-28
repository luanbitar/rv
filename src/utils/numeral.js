export const isIncluded = (value, plus = true) =>
  value === 0 ? 'Included' : `${plus? '+' : ''}$${value}`