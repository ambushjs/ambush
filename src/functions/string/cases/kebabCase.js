/** Convert a string to kebab-case. */
module.exports = function kebabCase(input) {
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]+/g, '-')
        .toLowerCase();
};
