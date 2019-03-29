import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'

import CarEnhancer from 'enhancers/Car'
import StepsEnhancer from 'enhancers/Steps'
import hooks from './hooks'
import propsMapper from './propsMapper'

export default compose(
  setDisplayName('/src/enhancers/Engine/index.js'),
  CarEnhancer,
  StepsEnhancer,
  hooks,
  propsMapper
)