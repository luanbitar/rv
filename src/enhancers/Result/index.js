import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import CarEnhancer from 'enhancers/Car'
import StepsEnhancer from 'enhancers/Steps'
import propsMapper from './propsMapper'
import data from './data'

export default compose(
  setDisplayName('/src/enhancers/Result/index.js'),
  StepsEnhancer,
  CarEnhancer,
  data,
  propsMapper
)