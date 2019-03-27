import { compose, setDisplayName } from 'recompose'

import data from './data'

export default compose(
  setDisplayName('/src/enhancers/Car/index.js'),
  data
)
