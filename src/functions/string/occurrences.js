module.exports = function occurrences(input, substring) {
    const pattern = new RegExp(substring, 'g');
    const matches = input.match(pattern);

    return matches ? matches.length : 0;
};
