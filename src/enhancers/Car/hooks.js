import { compose, setDisplayName, lifecycle } from 'recompose'
import { fetchData } from '../../utils/fetch'

export default compose(
  setDisplayName('/src/enhancers/Car/hooks.js'),
  lifecycle({
    componentDidMount() {
      this.props.getCarData()
    }
  })
)