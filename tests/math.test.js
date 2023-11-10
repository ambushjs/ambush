const {
    factorial,
    fibonacci,
    mean,
    median,
    mode,
    pascal,
} = require('../src');

const assert = require('assert/strict');

module.exports = function mathTests() {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(100), 9.33262154439441e+157);

    assert.strictEqual(fibonacci(5), 5);
    assert.deepStrictEqual(fibonacci(5, true), [0, 1, 1, 2, 3, 5]);
    assert.strictEqual(fibonacci(0), 0);

    assert.strictEqual(mean([1, 2, 5, 7, 4]), 3.8);
    assert.strictEqual(mean([1, 2]), 1.5);
    assert.strictEqual(mean([0]), 0);

    assert.strictEqual(median([4, 3, 1, 2]), 2.5);
    assert.strictEqual(median([1, 2, 3]), 2);
    assert.strictEqual(median([0]), 0);

    assert.deepStrictEqual(mode([1, 1, 6, 6, 7, 7]), [1, 6, 7]);
    assert.strictEqual(mode([1, 1, 1, 5, 4]), 1);
    assert.strictEqual(mode([0]), 0);

    assert.deepStrictEqual(pascal(3), [[1], [1, 1], [1, 2, 1]]);
    assert.deepStrictEqual(pascal(4), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
    assert.deepStrictEqual(pascal(0), [[1]]);
}
