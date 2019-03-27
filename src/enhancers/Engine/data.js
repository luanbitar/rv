import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

import { setEngine } from 'reducers/Car/'
import { tookAStep } from 'reducers/Steps/'
import { getCarData } from 'utils/fetch'

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  getCarData: () => getCarData(dispatch),
  setEngine: id => dispatch(setEngine(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default compose(
  setDisplayName('/src/enhancers/Engine/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)