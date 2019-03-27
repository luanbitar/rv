import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'

import { setEngine, setCarData } from 'reducers/Car/actionCreators'
import { tookAStep } from 'reducers/Steps/actionCreators'
import { fetchData } from 'utils/fetch'

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  getCarData: () => fetchData().then(({ data }) => dispatch(setCarData(data))),
  setEngine: id => dispatch(setEngine(id)),
  tookAStep: step => dispatch(tookAStep(step))
})

export default compose(
  setDisplayName('/src/enhancers/Engine/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)