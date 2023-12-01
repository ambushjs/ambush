module.exports = function size(data) {
    if (Array.isArray(data)) {
        return data.length;
    }

    if (typeof data === 'object') {
        return Object.keys(data).length;
    }

    if (typeof data === 'string') {
        return data.length;
    }

    if (typeof data === 'number') {
        return String(data).length;
    }

    return null;
};
