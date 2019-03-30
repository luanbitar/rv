import * as R from 'ramda'

import { enginesImages, cars, wheelsImages, finalImages } from 'utils/images'

export const changeImageFieldToLocalPath = data => {
  let engine = R.path(['engine', 'items'], data),
      color = R.path(['color', 'items'], data),
      wheels = R.path(['wheels', 'items'], data),
      results = R.path(['results', 'items'], data)
  data = R.assocPath(['engine', 'items'], mutatedArray(engine, enginesImages), data)
  data = R.assocPath(['color', 'items'], mutatedArray(color, cars), data)
  data = R.assocPath(['wheels', 'items'], mutatedArray(wheels, wheelsImages), data)
  data = R.assocPath(['results', 'items'], mutatedArray(results, finalImages), data)
  return {
    ...data
  }
}

const mutatedArray = (destiny, content) => destiny.map((item, i) => R.assoc('image', content[i], item))