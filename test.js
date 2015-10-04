import test from 'ava';
import isWeakSet from './';

test(t => {
	t.true(isWeakSet(new WeakSet()));
	t.false(isWeakSet(new Set()));
	t.false(isWeakSet({}));
	t.false(isWeakSet([]));

	t.end();
});
