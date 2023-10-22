function occurrences(input, substring) {
    if (typeof input !== 'string' || typeof substring !== 'string') return 0;

    const pattern = new RegExp(substring, 'g');
    const matches = input.match(pattern);

    return matches ? matches.length : 0;
}

module.exports = occurrences;
