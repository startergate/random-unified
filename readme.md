# random-unified [![Build Status](https://travis-ci.org/startergate/random-unified.svg?branch=master)](https://travis-ci.org/startergate/random-unified)

> Generate/Get something random. Unified version of [sindresorhus](https://github.com/sindresorhus)'s random packages.

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
$ npm install random-unified
```


## Usage

```js
var random = require('random-unified');

random.int(5);
//=> 3

random.int(10, 100);
//=> 54

random.float(5);
//=> 4.401887938147411

random.float(10, 100);
//=> 72.34217455144972

random.item(['pony', 'unicorn', 'rainbow']);
//=> 'unicorn'

random.boolean();
//=> true

random.boolean();
//=> false

random.obj_key({foo: true, bar: true});
//=> 'bar'

random.obj_prop({foo: 'pony', bar: 'unicorn'});
//=> 'unicorn'

const rand = random.unique(1, 10);

console.log(rand(), rand(), rand());
//=> 5 2 6

const random = random.unique_array([1, 2, 3, 4]);

console.log(random(), random(), random(), random());
//=> 4 2 1 4

random.crypto(10);
//=> '2cf05d94db'
```
## Original Repository

- [random-int](https://github.com/sindresorhus/random-int)
- [random-float](https://github.com/sindresorhus/random-float)
- [random-item](https://github.com/sindresorhus/random-item)
- [random-boolean](https://github.com/sindresorhus/random-boolean)
- [random-obj-key](https://github.com/sindresorhus/random-obj-key)
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop)
- [unique-random](https://github.com/sindresorhus/unique-random)
- [unique-random-array](https://github.com/sindresorhus/unique-random-array)
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
Modified by [startergate](https://github.com/startergate)
