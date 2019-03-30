import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

import { setCarData } from 'reducers/Car/'
import { getCarData } from 'utils/fetch'

const mapStateToProps = state => ({ carData: state.carReducer })

const mapDispatchToProps = dispatch => ({
  getCarData: () => getCarData(dispatch),
  setCarData: data => dispatch(setCarData(data))
})

export default compose(
  setDisplayName('/src/enhancers/Car/data.js'),
  connect(mapStateToProps, mapDispatchToProps)
)