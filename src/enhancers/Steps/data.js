import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ steps: state.stepsReducer })

export default compose(
  setDisplayName('/src/enhancers/Steps/data.js'),
  connect(mapStateToProps)
)