import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import CarEnhancer from 'enhancers/Car'
import StepsEnhancer from 'enhancers/Steps'
import propsMapper from './propsMapper'

export default compose(
  setDisplayName('/src/enhancers/Wheels/index.js'),
  StepsEnhancer,
  CarEnhancer,
  propsMapper
)