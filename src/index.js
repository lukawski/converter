import Style from './index.css'
import Converter from './Converter.js'
import History from './History.js'

const converter = new Converter({eur: 4, pln: 4.4})
const history = new History()
const convertButton = document.getElementById('convert')
const convertInput = document.getElementById('value')
const historySection = document.getElementById('history')

convertButton.addEventListener('click', e => {
  if (!convertInput.value) return false
  if (isNaN(convertInput.value)) return false

  var userValue = Number(convertInput.value)
  var convertedValue = converter.convert('eur', userValue)

  history.add({ value: convertedValue, date: new Date()})

  var latestEntry = history.getLatest()
  var newHistoryElement = history.createHTMLElement(latestEntry)

  historySection.appendChild(newHistoryElement)
})
