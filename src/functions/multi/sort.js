module.exports = function sort(data) {
    if (Array.isArray(data)) {
        return data.slice().sort();
    }

    if (typeof data === 'object') {
        const sortedKeys = Object.keys(data).sort();
        const sortedObject = {};

        for (const key of sortedKeys) {
            sortedObject[key] = data[key];
        }

        return sortedObject;
    }

    if (typeof data === 'string') {
        return data.split('').sort().join('');
    }

    return null;
};
