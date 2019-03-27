import { compose, setDisplayName } from 'recompose'

import CarEnhancer from '../Car/'

export default compose(
  setDisplayName('/.../'),
  CarEnhancer,
  handler
)