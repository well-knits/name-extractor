# name-extractor

Give a String, extract out potential names. This is probably mostly useful as a starting point for something else, since the algorithm is quite rough - rather finding too many names than to few.

[![NPM](https://nodei.co/npm/name-extractor.png?downloads&stars)](https://nodei.co/npm/name-extractor/)

[![NPM](https://nodei.co/npm-dl/name-extractor.png)](https://nodei.co/npm/name-extractor/)

## Installation

```
npm install name-extractor
```

## Example

### Input

```javascript
var extract = require('./name-extractor')

console.log('Potential names:')
console.log('Hello, World! ->', extract('Hello, World!'))
console.log('Crying at the Discoteque ->', extract('Crying at the Discoteque'))
```

### Output

```
Potential names:
Hello, World! -> [ 'Hello,', 'Hello, World!', 'World!' ]
Crying at the Discoteque -> [ 'Crying',
  'Crying at',
  'Crying at the',
  'Crying at the Discoteque',
  'Discoteque',
  'the Discoteque',
  'at the Discoteque' ]
```

## Licence

Copyright (c) 2014 David Björklund & Lisa Övermyr

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
