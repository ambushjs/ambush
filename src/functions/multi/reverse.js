module.exports = function reverse(data) {
    if (typeof data === 'string') return Array.from(data).reverse().join('');
    else if (Array.isArray(data)) return data.reverse();
    else if (typeof data === 'object') {
        const keys = Object.keys(data).reverse();
        const reversedObject = {};

        for (const key of keys) {
            reversedObject[key] = data[key];
        }

        return reversedObject;
    }
};
