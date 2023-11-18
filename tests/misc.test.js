const {
    chunk,
    deduplicate,
    difference,
    flatten,
    intersection,
} = require('../src');

const { deepStrictEqual } = require('assert/strict');

module.exports = function miscTests() {
    deepStrictEqual(chunk([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
    deepStrictEqual(chunk([1, 2, 3], 5), [[1, 2, 3]]);
    deepStrictEqual(chunk([0], 1), [[0]]);
    deepStrictEqual(chunk({ a: 1, b: 2, c: 3 }, 2), [{ a: 1, b: 2 }, { c: 3 }]);
    deepStrictEqual(chunk({ a: 1, b: 2, c: 3 }, 5), [{ a: 1, b: 2, c: 3 }]);
    deepStrictEqual(chunk({}), []);

    deepStrictEqual(deduplicate('aabbcc'), ['a', 'b', 'c']);
    deepStrictEqual(deduplicate('abc'), ['a', 'b', 'c']);
    deepStrictEqual(deduplicate(''), []);
    deepStrictEqual(deduplicate([1, 1, 2, 3,]), [1, 2, 3]);
    deepStrictEqual(deduplicate([1, 5, 9]), [1, 5, 9]);
    deepStrictEqual(deduplicate([0]), [0]);
    deepStrictEqual(deduplicate({ a: 1, b: 2, b: 2 }), { a: 1, b: 2 });
    deepStrictEqual(deduplicate({ a: 1, b: 2, b: 3 }), { a: 1, b: 3 });
    deepStrictEqual(deduplicate({}), {});

    deepStrictEqual(difference('abc', 'bcd'), ['a', 'd']);
    deepStrictEqual(difference('abc', 'abc'), []);
    deepStrictEqual(difference('', ''), []);
    deepStrictEqual(difference([1, 2, 3], [2, 3, 4]), [1, 4]);
    deepStrictEqual(difference([1, 2, 3], [1, 2, 3]), []);
    deepStrictEqual(difference([], []), []);
    deepStrictEqual(difference({ a: 1, b: 2, c: 3 }, { b: 2, c: 3, d: 4 }), { a: 1, d: 4 });
    deepStrictEqual(difference({ a: 1, b: 2 }, { a: 1, b: 3 }), { b: 2 });
    deepStrictEqual(difference({}, {}), {});

    deepStrictEqual(flatten([1, [2, 3, [4, 5]]]), [1, 2, 3, 4, 5]);
    deepStrictEqual(flatten([1, 2, 3]), [1, 2, 3]);
    deepStrictEqual(flatten([]), [[]]);
    deepStrictEqual(flatten({ a: 1, b: { c: 3 } }), { a: 1, 'b.c': 3 });
    deepStrictEqual(flatten({ a: 1, b: { c: 3 } }, '-'), { a: 1, 'b-c': 3 });
    deepStrictEqual(flatten({}), {});

    deepStrictEqual(intersection('abc', 'bcd'), ['b', 'c']);
    deepStrictEqual(intersection('abc', 'xyz'), []);
    deepStrictEqual(intersection('', ''), []);
    deepStrictEqual(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
    deepStrictEqual(intersection([1, 2, 3], [7, 8, 9]), []);
    deepStrictEqual(intersection([], []), []);
    deepStrictEqual(intersection({ a: 1, b: 2, c: 3 }, { b: 2, c: 3, d: 4 }), { b: 2, c: 3 });
    deepStrictEqual(intersection({ a: 1, b: 2, c: 3 }, { x: 7, y: 8, z: 9 }), {});
    deepStrictEqual(intersection({}, {}), {});
};
