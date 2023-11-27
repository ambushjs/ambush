module.exports = function camelCase(string) {
    return string.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
};
