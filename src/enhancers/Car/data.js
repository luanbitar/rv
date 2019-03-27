import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'

import { setEngine } from 'reducers/Car/actionCreators'
import { tookAStep } from 'reducers/Steps/actionCreators'
import { fetchData } from 'utils/fetch'

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  getCarData: () => dispatch(fetchData()),
  setEngine: id => dispatch(setEngine(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default compose(
  setDisplayName('/src/enhancers/Car/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)