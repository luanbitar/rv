import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ 
  carData: state.carReducer,
  steps: state.stepsReducer
})

export default compose(
  setDisplayName('/src/enhancers/Footer/data.js'),
  connect(mapStateToProps)
)