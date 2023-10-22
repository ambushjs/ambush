function checkType(input) {
    return input && typeof input === 'string';
}

module.exports = function occurrences(input, substring) {
    if (!checkType(input) || !checkType(substring)) return 0;

    const pattern = new RegExp(substring, 'g');
    const matches = input.match(pattern);

    return matches ? matches.length : 0;
};
