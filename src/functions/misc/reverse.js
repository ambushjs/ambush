module.exports = function reverse(data) {
    if (typeof data === 'string') {
        return data.split('').reverse().join('');
    }

    if (Array.isArray(data)) {
        return [...data].reverse();
    }

    if (typeof data === 'object') {
        const keys = Object.keys(data).reverse();
        const reversedObject = {};

        for (const key of keys) {
            reversedObject[key] = data[key];
        }

        return reversedObject;
    }

    return null;
};
