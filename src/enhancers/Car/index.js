import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import data from './data'
import hooks from './hooks'

export default compose(
  setDisplayName('/src/enhancers/Car/index.js'),
  data,
  hooks
)