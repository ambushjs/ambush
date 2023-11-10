module.exports = function snakeCase(input) {
    return input
        .replace(/[-\s]/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
};
