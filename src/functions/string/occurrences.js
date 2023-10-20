function occurrences(input, substring) {
    if (!input || !substring) return 0;

    const pattern = new RegExp(substring, 'g');
    const matches = input.match(pattern);

    return matches ? matches.length : 0;
}

module.exports = occurrences;
