import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from 'recompose/lifecycle'
import * as R from 'ramda'

import { isBase64, getSelectedField, changeImageStringFieldB64 } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Color/hooks.js'),
  lifecycle({
    async componentDidUpdate(prevProps) {
      if(prevProps !== this.props) {
        const color = getSelectedField(this.props, 'color', 'selectedColor')
        const image = R.path(['item', 'image'], color)
        if(image && !isBase64(image) && !this.props.isLoadingImage) {
          console.log('change')
          this.props.setLoadingImage(true)
          await changeImageStringFieldB64(this.props, 'color')
          this.props.setLoadingImage(false)
        }
      }
    }
  })
)
