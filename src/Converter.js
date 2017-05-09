class Converter {
  constructor (currencies) {
    this.currencies = currencies
  }

  convert (currency, value) {
    const currencyRule = this.currencies[currency]
    var converted = currencyRule * (1 + (Math.random() * 100) / 1000)

    return converted
  }
}
