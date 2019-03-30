import numeral from 'numeral'
numeral.zeroFormat('Included')
numeral.nullFormat('Included')

export const currency = (value, plus = true) => 
 numeral(value).format(`${plus? '+' : ''}$0,000`).replace(',', '.')