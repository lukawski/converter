export default class Converter {
  constructor (currencies) {
    this.currencies = currencies
  }

  convert (currency, value) {
    const currencyRule = this.currencies[currency]
    const course = currencyRule * (1 + (Math.random() * 100) / 1000)
    var converted = course * value

    return converted
  }
}
