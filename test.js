'use strict';
var test = require('ava');
var isWeakSet = require('./');

test(function (t) {
	t.true(isWeakSet(new WeakSet()));
	t.false(isWeakSet(new Set()));
	t.false(isWeakSet({}));
	t.false(isWeakSet([]));

	t.end();
});
