function isType(item) {
    return typeof item === 'object' || typeof item === 'string';
}

function hasOwn(thisArg, arg) {
    return Object.prototype.hasOwnProperty.call(thisArg, arg);
}

module.exports = function merge(target, ...datas) {
    if (!isType(target) || !datas.length) {return target;} else if (datas.every(isType)) {
        if (Array.isArray(target)) {return target.concat(...datas);} else if (typeof target === 'object') {
            for (const data of datas) {
                for (const key in data) {
                    if (!hasOwn(data, key)) {continue;}
                    if (key === '__proto__' || key === 'constructor') {continue;}

                    if (hasOwn(target, key) && isType(data[key])) {
                        if (!isType(target[key])) {target[key] = {};}
                        target[key] = merge(target[key], data[key]);
                    } else {target[key] = data[key];}
                }
            }

            return target;
        }

        return datas.reduce((acc, str) => acc + str, target);
    }

    return merge(target, ...datas);
};
