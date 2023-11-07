module.exports = function sort(data, caseSensitive = true) {
    if (Array.isArray(data)) {return caseSensitive ? data.slice().sort() : data.slice().sort((a, b) => a - b);} else if (typeof data === 'object') {
        const sortedKeys = Object.keys(data).sort(caseSensitive ? undefined : (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        const sortedObject = {};

        for (const key of sortedKeys) {
            sortedObject[key] = data[key];
        }

        return sortedObject;
    } else if (typeof data === 'string') {return caseSensitive ? data.split('').sort().join('') : data.split('').sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).join('');}

    return data;
};
