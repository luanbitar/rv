import { compose, setDisplayName } from 'recompose'

import data from './data'
import propsMapper from './propsMapper'
import hooks from './hooks'

export default compose(
  setDisplayName('/src/enhancers/Engine/index.js'),
  data,
  hooks,
  propsMapper
)