const {
    altCase,
    camelCase,
    kebabCase,
    lowerCase,
    pascalCase,
    sentenceCase,
    snakeCase,
    startCase,
    switchCase,
    titleCase,
    upperCase,
    escapeHtml,
    unescapeHtml,
    palindrome,
    truncate,
} = require('../src');

const assert = require('assert/strict');

module.exports = function stringTests() {
    assert.strictEqual(altCase('Hello world!'), 'hElLo wOrLd!');
    assert.strictEqual(camelCase('hello-world'), 'helloWorld');
    assert.strictEqual(kebabCase('helloWorld'), 'hello-world');
    assert.strictEqual(lowerCase('HeLLo'), 'hello');
    assert.strictEqual(pascalCase('hello-world'), 'HelloWorld');
    assert.strictEqual(sentenceCase('THE quiCK bRown fox. jUMPS? over tHE! lAZy doG'), 'The quick brown fox. Jumps? Over the! Lazy dog');
    assert.strictEqual(snakeCase('helloWorld'), 'hello_world');
    assert.strictEqual(startCase('hello world'), 'Hello World');
    assert.strictEqual(switchCase('HeLLo'), 'hEllO');
    assert.strictEqual(titleCase('the quick brown fox Jumps oVer the lazy doG'), 'The Quick Brown Fox Jumps Over the Lazy Dog');
    assert.strictEqual(upperCase('heLlo'), 'HELLO');

    assert.strictEqual(escapeHtml(`"&'<>\``), '&quot;&amp;&#x27;&lt;&gt;&#x60;');
    assert.strictEqual(unescapeHtml('&quot;&amp;&#x27;&lt;&gt;&#x60;'), `"&'<>\``);
    assert.strictEqual(escapeHtml('Test'), 'Test');
    assert.strictEqual(unescapeHtml('Test'), 'Test');

    assert.strictEqual(palindrome('A man a plan a canal Panama'), true);
    assert.strictEqual(palindrome('not a palindrome'), false);
    assert.strictEqual(palindrome(''), true);
    assert.strictEqual(palindrome('a'), true);

    assert.strictEqual(truncate('This is a long string', { length: 10 }), 'This is a...');
    assert.strictEqual(truncate('Short', { length: 10 }), 'Short');
    assert.strictEqual(truncate('This is a long string', { length: 10, ending: '...more'}), 'This is a...more');
    assert.strictEqual(truncate('This is a long string'), 'This is a...');
    assert.strictEqual(truncate('', { length: 10 }), '');
};
