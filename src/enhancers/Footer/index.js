import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import data from './data'
import propsMapper from './propsMapper'

export default compose(
  setDisplayName('/src/enhancers/Footer/index.js'),
  data,
  propsMapper  
)