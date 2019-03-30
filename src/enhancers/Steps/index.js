import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import data from './data'

export default compose(
  setDisplayName('/src/enhancers/Steps/index.js'),
  data
)