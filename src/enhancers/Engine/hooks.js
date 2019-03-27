import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from 'recompose/lifecycle'

export default compose(
  setDisplayName('/src/enhancers/Engine/hooks.js'),
  lifecycle({
    componentDidMount() {
      this.props.getCarData()
    }
  })
)