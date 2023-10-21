function isType(item) {
    return item && typeof item === 'object';
}

module.exports = function merge(target, ...sources) {
    if (!isType(target)) throw new TypeError('Invalid target provided');

    if (!sources.length) return updated;
    else if (sources.every(isType)) {
        if (Array.isArray(target)) return [].concat(target, ...sources);
        return Object.assign({}, target, ...sources);
    }

    return merge(target, ...sources);
};
