'use strict';

var test = require('ava');
var isWeakSet = require('../');

test(function (t) {
	t.assert(isWeakSet(new WeakSet()));
	t.assert(!isWeakSet(new Set()));
	t.assert(!isWeakSet({}));
	t.assert(!isWeakSet([]));
});
