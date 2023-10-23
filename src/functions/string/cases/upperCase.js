/** Convert a string to UPPERCASE. */
module.exports = function upperCase(input) {
    return typeof input === 'string' ? input.toUpperCase() : input;
};
