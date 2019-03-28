import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

import { resetSelections } from 'reducers/Steps'

const mapDispatchToProps = dispatch => ({
  resetSteps: () => dispatch(resetSelections())
})

export default compose(
  setDisplayName('/src/enhancers/Result/data.js'),
  connect(null, mapDispatchToProps)
)