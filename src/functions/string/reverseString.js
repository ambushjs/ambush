module.exports = function reverseString(input) {
    if (typeof input !== 'string') return input;
    return Array.from(input).reverse().join('');
};
