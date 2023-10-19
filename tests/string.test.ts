import {
    camelCase,
    kebabCase,
    lowerCase,
    pascalCase,
    sentenceCase,
    snakeCase,
    startCase,
    titleCase,
    toggleCase,
    upperCase,
    escapeHtml,
    unescapeHtml,
    occurrences,
    reverseString,
    truncate,
} from '../src/index';

describe('cases', () => {
    it('should convert to camelCase', () => expect(camelCase('hello-world')).toBe('helloWorld'));
    it('should convert to kebab-case', () => expect(kebabCase('helloWorld')).toBe('hello-world'));
    it('should convert to lowercase', () => expect(lowerCase('HeLLo')).toBe('hello'));
    it('should convert to PascalCase', () => expect(pascalCase('hello-world')).toBe('HelloWorld'));
    it('should convert to Sentence case', () => expect(sentenceCase('THE quiCK bRown fox. jUMPS? over tHE! lAZy doG')).toBe('The quick brown fox. Jumps? Over the! Lazy dog'));
    it('should convert to snake_case', () => expect(snakeCase('helloWorld')).toBe('hello_world'));
    it('should convert to Start Case', () => expect(startCase('hello world')).toBe('Hello World'));
    it('should convert to titleCase', () => expect(titleCase('the quick brown fox Jumps oVer the lazy doG')).toBe('The Quick Brown Fox Jumps Over the Lazy Dog'));
    it('should convert to tOgGlEcAsE', () => expect(toggleCase('HeLLo')).toBe('hEllO'));
    it('should convert to UPPERCASE', () => expect(upperCase('heLlo')).toBe('HELLO'));
});

describe('escape and unescape functions', () => {
    it('should escape special characters', () => {
        const input = `"&'<>\``;
        const expected = '&quot;&amp;&#x27;&lt;&gt;&#x60;';
        const result = escapeHtml(input);
        expect(result).toBe(expected);
    });

    it('should unescape special characters', () => {
        const input = '&quot;&amp;&#x27;&lt;&gt;&#x60;';
        const expected = `"&'<>\``;
        const result = unescapeHtml(input);
        expect(result).toBe(expected);
    });

    it('should not modify non-special characters', () => {
        const input = 'This is a test string.';
        const result = escapeHtml(input);
        const unescapedResult = unescapeHtml(input);
        expect(result).toBe(input);
        expect(unescapedResult).toBe(input);
    });
});

describe('occurrences', () => {
    it('should return the correct number of occurrences', () => {
        expect(occurrences('hello world', 'o')).toEqual(2);
        expect(occurrences('aaaaaa', 'aa')).toEqual(3);
    });

    it('should return 0 for empty input or substring', () => {
        expect(occurrences('', 'a')).toEqual(0);
        expect(occurrences('hello world', '')).toEqual(0);
        expect(occurrences('', '')).toEqual(0);
    });

    it('should handle non-matching substrings', () => expect(occurrences('hello world', 'z')).toEqual(0));
    it('should handle overlapping occurrences', () => expect(occurrences('aaaaaaa', 'aaa')).toEqual(2));
});

describe('reverseString', () => {
    it('should reverse a string correctly', () => {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('world')).toEqual('dlrow');
        expect(reverseString('')).toEqual('');
    });
});

describe('truncate', () => {
    it('should truncate a string to the specified length', () => {
        expect(truncate('This is a long string', 10)).toEqual('This is a...');
        expect(truncate('Short', 10)).toEqual('Short');
    });

    it('should append a suffix if provided', () => expect(truncate('This is a long string', 10, '...more')).toEqual('This is a...more'));
    it('should append a suffix if not provided', () => expect(truncate('This is a long string')).toEqual('This is a...'));
    it('should return an empty string if the input is empty', () => expect(truncate('', 10)).toEqual(''));
});
