import { compose, setDisplayName } from 'recompose'

import data from './data'
import hooks from './hooks'

export default compose(
  setDisplayName('/src/enhancers/Car/index.js'),
  data,
  hooks
)
