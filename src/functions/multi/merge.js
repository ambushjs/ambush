function isType(item) {
    return typeof item === 'object' || typeof item === 'string';
}

/** Deep merge an object, array or a string together. */
module.exports = function merge(target, ...sources) {
    if (!isType(target)) return target;

    if (!sources.length) return target;
    else if (sources.every(isType)) {
        if (Array.isArray(target)) return [].concat(target, ...sources);
        else if (typeof item === 'object') return Object.assign({}, target, ...sources);

        return sources.reduce((acc, str) => acc + str, target);
    }

    return merge(target, ...sources);
};
