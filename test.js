var test = require('tape'),
    extract = require('./name-extractor')

test('simple', function (t) {
  t.deepEqual(
      extract('beep Hello World boop').sort()
    , [
          'Hello'
        , 'Hello World'
        , 'World'
      ]
  )
  t.end()
})

test('include title minor-case words', function (t) {
  t.deepEqual(
      extract('they were playing Crying at the Discoteque yesterday').sort()
    , [
          'Crying'
        , 'Crying at'
        , 'Crying at the'
        , 'Crying at the Discoteque'
        , 'Discoteque'
        , 'at the Discoteque'
        , 'the Discoteque'
      ]
  )
  t.end()
})