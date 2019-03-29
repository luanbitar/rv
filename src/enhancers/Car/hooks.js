import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from 'recompose/lifecycle'
import * as R from 'ramda'

import { getSelectedField, isBase64, changeImageStringFieldB64 } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Car/hooks.js'),
  lifecycle({
    async componentDidMount() {
      const { getCarData, carData, setLoadingImage } = this.props
      if(!carData.price) await getCarData()
      const color = getSelectedField(this.props)
      const image = R.path(['item', 'image'], color)
      const hasToChangeImageToBase64 = image && !isBase64(image)
      if(hasToChangeImageToBase64) await changeImageStringFieldB64(this.props)
      setLoadingImage(false)
    }
  })
)