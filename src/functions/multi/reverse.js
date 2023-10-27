module.exports = function reverse(input) {
    if (typeof input === 'string') return Array.from(input).reverse().join('');
    else if (Array.isArray(input)) return input.reverse();
    else if (typeof input === 'object') {
        const keys = Object.keys(input).reverse();
        const reversedObject = {};

        for (const key of keys) {
            reversedObject[key] = input[key];
        }

        return reversedObject;
    }
};
