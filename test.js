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

test('include some crazy spacing', function (t) {
  t.deepEqual(
      extract(' \t the\r\tHello\t\t\t\n World\t\r\t').sort()
    , [
          'Hello'
        , 'Hello World'
        , 'World'
        , 'the Hello'
        , 'the Hello World'
      ]
  )
  t.end()
})

test('when a title-minor-word is at the end of a sentence', function (t) {
  t.deepEqual(
      extract('You\'re out!').sort()
    , [
          'You\'re'
        , 'You\'re out!'
      ]
  )
  t.deepEqual(
      extract('Hello in.beep')
    , [ 'Hello' ]
  )

  t.end()
})
