import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

import { getCarData } from 'utils/fetch'
import { selected } from 'reducers/Steps' 

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  getCarData: () => getCarData(dispatch),
  selected: (step, value) => dispatch(selected(step, value))
})

export default compose(
  setDisplayName('/src/enhancers/Car/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)