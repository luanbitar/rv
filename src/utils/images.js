import * as R from 'ramda'

import withoutEngine from 'images/engine-1.png'
import withEngine from 'images/engine-2.png'

import redDot from 'images/dot-red.png'
import blueDot from 'images/dot-blue.png'
import greyDot from 'images/dot-grey.png'

import redCar from 'images/color-red.png'
import blueCar from 'images/color-blue.png'
import greyCar from 'images/color-grey.png'

import metalicWheel from 'images/wheel-metalic.png'
import carbonWheel from 'images/wheel-carbon-dark.png'
import grafittiWheel from 'images/wheel-gray-grafitti.png'

import finalRed from 'images/final-red.png'
import finalBlue from 'images/final-blue.png'
import finalGrey from 'images/final-grey.png'

export const enginesImages = [withoutEngine, withEngine, withEngine]
export const dots = [redDot, blueDot, greyDot]
export const cars = [redCar, blueCar, greyCar]
export const wheelsImages = [metalicWheel, carbonWheel, grafittiWheel]
export const finalImages = [finalRed, finalBlue, finalGrey]

export const urlToB64 = url => 
  new Promise(async res => {
    const response = await fetch(url)
    const blob = await response.blob()
    const b64 = await blobToBase64(blob)
    res(b64)
  })

export const blobToBase64 = blob => 
  new Promise(res => {
    var reader = new FileReader()
    reader.onload = () => {
      var dataUrl = reader.result
      res(dataUrl)
    }
    reader.readAsDataURL(blob)
  })

export const isBase64 = b64 => /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(b64.split(',')[1])

export const getSelectedField = ({ carData, steps, field, selectedField }) => {
  const selected = R.prop(selectedField, steps),
    items = R.path([field, 'items'], carData)
  return {
    item: items[selected-1],
    selected: selected-1
  }
}

export const changeImageStringFieldB64 = ({ carData, setCarData, field }) => 
  new Promise(async res => {
    let items = R.path([field, 'items'], carData)
    items = items.map(async item => {
      const image = R.prop('image', item)
      const b64 = await urlToB64(image)
      return R.assoc('image', b64, item)
    })
    carData = R.assocPath([field, 'items'], await Promise.all(items), carData)
    setCarData(carData)
    res()
  })