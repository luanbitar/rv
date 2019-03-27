import { compose, setDisplayName, lifecycle } from 'recompose'

export default compose(
  setDisplayName('/src/enhancers/Engine/hooks.js'),
  lifecycle({
    componentDidMount() {
      this.props.getCarData()
    }
  })
)