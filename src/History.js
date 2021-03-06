export default class History {
  constructor () {
    this.history = []
    this.latest = {}
  }

  add (entry) {
    this.history.push(entry)
    this.latest = entry
  }

  getLatest () {
    return this.latest
  }

  createHTMLElement (element) {
    var el = document.createElement('div')
    el.classList.add('tile')
    var month = element.date.getMonth() > 9 ? element.date.getMonth() : `0${element.date.getMonth()}`
    var day = element.date.getDate() > 9 ? element.date.getDate() : `0${element.date.getDate()}`
    var hour = element.date.getHours() > 9 ? element.date.getHours() : `0${element.date.getHours()}`
    var min = element.date.getMinutes() > 9 ? element.date.getMinutes() : `0${element.date.getMinutes()}`

    el.innerHTML = `<div class="tile-content"><p class="upper tile-title">pln amount</p> <h1 class="tile-amount">${element.value}</h1></div> 
                    <time datetime="${element.date.getFullYear()}-${month}-${day} ${hour}:${min}" class="tile-date">${element.date.getFullYear()}.${month}.${day} ${hour}:${min}</time>`
    return el
  }
}
