import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from 'recompose/lifecycle'

export default compose(
  setDisplayName('/src/enhancers/Car/hooks.js'),
  lifecycle({
    async componentDidMount() {
      const { getCarData, carData } = this.props
      if(!carData.price) await getCarData()
    }
  })
)