module.exports = function occurrences(input, substring, caseSensitive) {
    const pattern = new RegExp(caseSensitive ? substring : substring.toLowerCase(), 'g');
    const matches = (caseSensitive ? input : input.toLowerCase()).match(pattern);

    return matches ? matches.length : 0;
};
