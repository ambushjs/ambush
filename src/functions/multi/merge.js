function isType(item) {
    return typeof item === 'object' || typeof item === 'string';
}

module.exports = function merge(target, ...datas) {
    if (!isType(target)) return target;

    if (!datas.length) return target;
    else if (datas.every(isType)) {
        if (Array.isArray(target)) return [].concat(target, ...datas);
        else if (typeof item === 'object') return Object.assign({}, target, ...datas);

        return datas.reduce((acc, str) => acc + str, target);
    }

    return merge(target, ...datas);
};
