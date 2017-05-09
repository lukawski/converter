const converter = new Converter({eur: 4, pln: 4.4})
const convertButton = document.getElementById('convert')
const convertInput = document.getElementById('value')

convertButton.addEventListener('click', e => {
  if (!convertInput.value) return false

  var userValue = Number(convertInput.value)
  var convertedValue = converter.convert('eur', userValue)
  console.log(convertedValue, Math.random() * 100)
})
