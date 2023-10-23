/** Convert a string to lowercase. */
module.exports = function lowerCase(input) {
    return typeof input === 'string' ? input.toLowerCase() : input;
};
