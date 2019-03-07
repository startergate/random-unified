'use strict';

class RandomU {
	int(min, max) {
		if (max === undefined) {
			max = min;
			min = 0;
		}

		if (typeof min !== 'number' || typeof max !== 'number') {
			throw new TypeError('Expected all arguments to be numbers');
		}

		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	float(min, max) {
		if (max === undefined) {
			max = min;
			min = 0;
		}

		if (typeof min !== 'number' || typeof max !== 'number') {
			throw new TypeError('Expected all arguments to be numbers');
		}

		return Math.random() * (max - min) + min;
	};

	item(arr) {
		if (!Array.isArray(arr)) {
			throw new TypeError('Expected an array');
		}

		return arr[Math.floor(Math.random() * arr.length)];
	};

	boolean() {
		return Math.random() >= 0.5;
	};

	obj_key(obj) {
		var keys = Object.keys(obj);
		return keys[Math.floor(Math.random() * keys.length)];
	};

	obj_prop(obj) {
		var keys = Object.keys(obj);
		return obj[keys[Math.floor(Math.random() * keys.length)]];
	};

	unique(min, max) {
		let prev;
		return function rand() {
			const num = Math.floor((Math.random() * (max - min + 1)) + min);
			prev = (num === prev && min !== max) ? rand() : num;
			return prev;
		};
	};

	unique_array(array) {
		const random = uniqueRandom(0, array.length - 1);
		return () => array[random()];
	};

	crypto(len) {
		if (!Number.isFinite(len)) {
			throw new TypeError('Expected a finite number');
		}

		return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
	};
}

module.exports = new RandomU()
