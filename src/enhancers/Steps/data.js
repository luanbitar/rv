import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

import { selected } from 'reducers/Steps' 

const mapStateToProps = state => ({ steps: state.stepsReducer })

const mapDispatchToProps = dispatch => ({
  selected: (step, value) => dispatch(selected(step, value))
})

export default compose(
  setDisplayName('/src/enhancers/Steps/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)