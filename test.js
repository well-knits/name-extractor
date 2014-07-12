var test = require('tape'),
    extract = require('./name-extractor')

test(function (t) {
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