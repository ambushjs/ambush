module.exports = function flatten(data, joiner = '.') {
    if (Array.isArray(data)) {
        const result = [];

        data.forEach((item, index) => {
            result[index] = flatten(item, joiner);
        });

        return result;
    } else if (typeof data === 'object' && data !== null) {
        const result = {};

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const flattened = flatten(data[key], joiner);
                result[key] = flattened;
            }
        }

        return result;
    }

    return null;
}
