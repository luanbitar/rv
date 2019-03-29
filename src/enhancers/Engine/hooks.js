import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from 'recompose/lifecycle'
import * as R from 'ramda'

import { isBase64, getSelectedField, changeImageStringFieldB64 } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Engine/hooks.js'),
  lifecycle({
    async componentDidUpdate(prevProps) {
      if(prevProps !== this.props) {
        const engine = getSelectedField(this.props, 'engine', 'selectedEngine')
        const image = R.path(['item', 'image'], engine)
        if(image && !isBase64(image) && !this.props.isLoadingImage) {
          this.props.setLoadingImage(true)
          await changeImageStringFieldB64(this.props, 'engine')
          this.props.setLoadingImage(false)
        }
      }
    }
  })
)
