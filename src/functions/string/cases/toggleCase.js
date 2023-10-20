module.exports = function toggleCase(input) {
    return input
        .split('')
        .map((char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
        .join('');
};
