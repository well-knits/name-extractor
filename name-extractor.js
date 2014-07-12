var Extractor = function (input) {
      this.tokens = input.split(' ')
      this.names = []
    },
    isCapitalized = function (string) {
      return string[0] >= 'A' && string[0] <= 'Z'
    }

Extractor.prototype._findNames = function (startIndex) {
  var index = startIndex
    , token

  while((token = this.tokens[index]) && isCapitalized(token)) {
    this.names.push(this.tokens.slice(startIndex, index + 1).join(' '))
    index++
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