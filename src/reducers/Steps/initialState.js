import { getItem } from 'utils/localStorage'

export default {
  selectedEngine: getItem('selectedEngine') || 1,
  selectedColor: getItem('selectedColor') || 1,
  selectedWheels: getItem('selectedWheels') || 1
}