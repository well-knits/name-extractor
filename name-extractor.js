var minors = require('title-case-minors').reduce(function (obj, minor) {
      obj[minor] = true
      return obj
    }, {})

  , Extractor = function (input) {
      this.tokens = input.split(' ')
      this.names = []
    },
    isCapitalized = function (string) {
      return string[0] >= 'A' && string[0] <= 'Z'
    }

Extractor.prototype._findNamesWithMinor = function (startIndex) {
  var index = startIndex + 1

  // first, step to the capitalized word
  while((token = this.tokens[index]) && minors[token])
    index++

  // second, add all the words that are capitalized or minors
  while((token = this.tokens[index]) && (isCapitalized(token) || minors[token])) {
    this.names.push(this.tokens.slice(startIndex, index + 1).join(' '))
    index++
  }
}

Extractor.prototype._findNames = function (startIndex) {
  var index = startIndex
    , token

  while((token = this.tokens[index]) && (isCapitalized(token) || minors[token])) {
    this.names.push(this.tokens.slice(startIndex, index + 1).join(' '))
    index++
  }

  index = startIndex - 1
  while((token = this.tokens[index]) && minors[token]) {
    this._findNamesWithMinor(index)
    index--
  }
}

Extractor.prototype.extract = function () {
  var self = this

  this.tokens.forEach(function (token, index) {
    if (isCapitalized(token))
      self._findNames(index)
  })

  return this.names
}

module.exports = function (input) {
  var extractor = new Extractor(input)

  return extractor.extract()
}