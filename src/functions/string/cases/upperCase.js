module.exports = function upperCase(input) {
    return typeof input === 'string' ? input.toUpperCase() : input;
};
