/** Convert a string to camelCase. */
module.exports = function camelCase(input) {
    return input.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
};
