# is-weakset [![Build Status](https://travis-ci.org/arthurvr/is-weakset.svg?branch=master)](https://travis-ci.org/arthurvr/is-weakset)

> Node module to easily check if an object is an [ES6 WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).

## Installation

```
$ npm install --save is-weakset
```

## Usage

```javascript
var isWeakSet = require('is-weakset');

isWeakSet(new WeakSet());
//=> true

isWeakSet({});
//=> false
```
## Related

* [`is-set`](https://github.com/arthurvr/is-set)
* [`is-map`](https://github.com/arthurvr/is-map)
* [`is-weakmap`](https://github.com/arthurvr/is-weakset)

## License

MIT © Arthur Verschaeve
