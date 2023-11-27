module.exports = function snakeCase(string) {
    return string
        .replace(/[-\s]/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
};
