# random-unified [![Build Status](https://travis-ci.org/startergate/random-unified.svg?branch=master)](https://travis-ci.org/startergate/random-unified)

> Generate/Get something random. Unified version of sindresorhus's random packages.

fork of
 * sindresorhus/random-int
 * sindresorhus/random-float
 * sindresorhus/random-item
 * sindresorhus/random-obj-key
 * sindresorhus/random-obj-prop
 * sindresorhus/unique-random
 * sindresorhus/unique-random-array
 * sindresorhus/crypto-random-string


## Install

```
$ npm install --save random-int
```


## Usage

```js
var random = require('random-unified');

random.int(5);
//=> 3

random.int(10, 100);
//=> 54
```


## API

### randomInt(max)

Returns an integer from `0` to `max`.

### randomInt(min, max)

Returns an integer from `min` to `max`.

#### min

Type: `number`  
Default: `0`

Minimum integer to return.

#### max

Type: `number`  
Default: `1`

Maximum integer to return.


## Original Repository

- [random-int](https://github.com/sindresorhus/random-int)
- [random-float](https://github.com/sindresorhus/random-float)
- [random-item](https://github.com/sindresorhus/random-item)
- [random-obj-key](https://github.com/sindresorhus/random-obj-key)
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop)
- [unique-random](https://github.com/sindresorhus/unique-random)
- [unique-random-array](https://github.com/sindresorhus/unique-random-array)
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
