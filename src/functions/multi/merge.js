function isType(item) {
    return typeof item === 'object' || typeof item === 'string';
}

module.exports = function merge(target, ...datas) {
    if (!isType(target) || !datas.length) return target;
    else if (datas.every(isType)) {
        if (Array.isArray(target)) return target.concat(...datas);
        else if (typeof target === 'object') {
            for (const data of datas) {
                for (const key in data) {
                    if (isType(data[key]) && isType(target[key])) target[key] = merge(target[key], data[key]);
                    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = data[key];
                }
            }

            return target;
        }

        return datas.reduce((acc, str) => acc + str, target);
    }

    return merge(target, ...datas);
};
