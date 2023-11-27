module.exports = function kebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]+/g, '-')
        .toLowerCase();
};
