/** Switch cases in a string. */
module.exports = function switchCase(input) {
    return input
        .split('')
        .map((char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
        .join('');
};
