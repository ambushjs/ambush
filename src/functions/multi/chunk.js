module.exports = function chunk(data, size) {
    if (Array.isArray(data)) {
        const chunkedArray = [];

        for (let i = 0; i < data.length; i += size) {
            const chunked = data.slice(i, i + size);
            chunkedArray.push(...chunked);
        }

        return chunkedArray;
    }

    if (typeof data === 'object') {
        const keys = Object.keys(data);
        const chunked = [];

        for (let i = 0; i < keys.length; i += size) {
            const chunkedObject = {};

            for (let j = i; j < i + size && j < keys.length; j++) {
                const key = keys[j];
                chunkedObject[key] = data[key];
            }

            chunked.push(chunkedObject);
        }

        return chunked;
    }

    return null;
};
