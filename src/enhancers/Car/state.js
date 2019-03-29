import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withState from 'recompose/withState'

export default compose(
  setDisplayName('/src/enhancers/Car/state.js'),
  withState('isLoadingImage', 'setLoadingImage', true)
)
