import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import CarEnhancer from 'enhancers/Car'
import propsMapper from './propsMapper'

export default compose(
  setDisplayName('/src/enhancers/Engine/index.js'),
  CarEnhancer,
  propsMapper
)