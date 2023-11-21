module.exports = function empty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string' || Array.isArray(value) || typeof value === 'symbol') {
        return value.length === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
};
