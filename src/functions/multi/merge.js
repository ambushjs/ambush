function isType(item) {
    return typeof item === 'object';
}

module.exports = function merge(target, ...sources) {
    if (!isType(target)) return target;

    if (!sources.length) return target;
    else if (sources.every(isType)) {
        if (Array.isArray(target)) return [].concat(target, ...sources);
        return Object.assign({}, target, ...sources);
    }

    return merge(target, ...sources);
};
