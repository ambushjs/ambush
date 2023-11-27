module.exports = function occurrences(string, substring, caseSensitive) {
    const pattern = new RegExp(caseSensitive ? substring : substring.toLowerCase(), 'g');
    const matches = (caseSensitive ? string : string.toLowerCase()).match(pattern);

    return matches ? matches.length : 0;
};
