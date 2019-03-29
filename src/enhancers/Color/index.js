import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import CarEnhancer from 'enhancers/Car'
import StepsEnhancer from 'enhancers/Steps'
import propsMapper from './propsMapper'
import hooks from './hooks'

export default compose(
  setDisplayName('/src/enhancers/Color/index.js'),
  CarEnhancer,
  StepsEnhancer,
  hooks,
  propsMapper
)