function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

module.exports = function merge(target, ...sources) {
    const updated = isObject(target) ? target : {};

    if (!sources.length) return updated;
    else if (isObject(updated) && sources.every(isObject)) return Object.assign({}, updated, ...sources);

    return merge(target, ...sources);
};
