const {
    daysAgo,
    leapYear,
} = require('../src');

const assert = require('assert/strict');

module.exports = function dateTests() {
    assert.notStrictEqual(daysAgo(3), null);
    assert.notStrictEqual(daysAgo(3), undefined);
    assert.notStrictEqual(daysAgo(3), {});

    assert.strictEqual(leapYear(2023), false);
    assert.strictEqual(leapYear(2000), true);
    assert.strictEqual(leapYear(1900), false);
}
