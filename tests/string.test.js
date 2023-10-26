const {
    camelCase,
    kebabCase,
    lowerCase,
    pascalCase,
    sentenceCase,
    snakeCase,
    startCase,
    switchCase,
    titleCase,
    toggleCase,
    upperCase,
    escapeHtml,
    unescapeHtml,
    occurrences,
    palindrome,
    reverseString,
    truncate,
} = require('../src');

const assert = require('assert');

module.exports = function stringTests() {
    assert.strictEqual(camelCase('hello-world'), 'helloWorld');
    assert.strictEqual(kebabCase('helloWorld'), 'hello-world');
    assert.strictEqual(lowerCase('HeLLo'), 'hello');
    assert.strictEqual(pascalCase('hello-world'), 'HelloWorld');
    assert.strictEqual(sentenceCase('THE quiCK bRown fox. jUMPS? over tHE! lAZy doG'), 'The quick brown fox. Jumps? Over the! Lazy dog');
    assert.strictEqual(snakeCase('helloWorld'), 'hello_world');
    assert.strictEqual(startCase('hello world'), 'Hello World');
    assert.strictEqual(switchCase('HeLLo'), 'hEllO');
    assert.strictEqual(titleCase('the quick brown fox Jumps oVer the lazy doG'), 'The Quick Brown Fox Jumps Over the Lazy Dog');
    assert.strictEqual(toggleCase('Hello world!'), 'hElLo wOrLd!');
    assert.strictEqual(upperCase('heLlo'), 'HELLO');

    assert.strictEqual(escapeHtml(`"&'<>\``), '&quot;&amp;&#x27;&lt;&gt;&#x60;');
    assert.strictEqual(unescapeHtml('&quot;&amp;&#x27;&lt;&gt;&#x60;'), `"&'<>\``);
    assert.strictEqual(escapeHtml('Test'), 'Test');
    assert.strictEqual(unescapeHtml('Test'), 'Test');

    assert.strictEqual(occurrences('hello world', 'o'), 2);
    assert.strictEqual(occurrences('aaaaaa', 'aa'), 3);
    assert.strictEqual(occurrences('', 'a'), 0);
    assert.strictEqual(occurrences('hello world', ''), 0);
    assert.strictEqual(occurrences('', ''), 0);
    assert.strictEqual(occurrences('hello world', 'z'), 0);
    assert.strictEqual(occurrences('aaaaaaa', 'aaa'), 2);

    assert.strictEqual(palindrome('A man a plan a canal Panama'), true);
    assert.strictEqual(palindrome('not a palindrome'), false);
    assert.strictEqual(palindrome(''), true);
    assert.strictEqual(palindrome('a'), true);

    assert.strictEqual(reverseString('hello'), 'olleh');
    assert.strictEqual(reverseString('world'), 'dlrow');
    assert.strictEqual(reverseString(''), '');

    assert.strictEqual(truncate('This is a long string', 10), 'This is a...');
    assert.strictEqual(truncate('Short', 10), 'Short');
    assert.strictEqual(truncate('This is a long string', 10, '...more'), 'This is a...more');
    assert.strictEqual(truncate('This is a long string'), 'This is a...');
    assert.strictEqual(truncate('', 10), '');
}
