import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

export default compose(
  setDisplayName('/src/enhancers/Engine/propsMapper.js'),
  withProps((props) => {
    const { carData, steps, isLoadingImage } = props,
      engines = R.path(['engine', 'items'], carData),
      selectedEngine = R.prop('selectedEngine', steps),
      engineSrc = R.prop('image', engines[selectedEngine-1])

    return {
      ...props,
      engines,
      selectedEngine,
      engineSrc,
      isLoadingImage: isLoadingImage || !engineSrc
    }
  })
)