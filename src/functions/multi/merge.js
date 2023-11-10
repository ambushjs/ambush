function isType(item) {
    return typeof item === 'object' || typeof item === 'string';
}

function hasOwn(data, key) {
    return Object.prototype.hasOwnProperty.call(data, key);
}

module.exports = function merge(target, ...datas) {
    if (datas.every(isType)) {
        if (Array.isArray(target)) {
            return target.concat(...datas);
        }

        if (typeof target === 'object') {
            for (const data of datas) {
                for (const key in data) {
                    if (!hasOwn(data, key)) {
                        continue;
                    }

                    if (key === '__proto__' || key === 'constructor') {
                        continue;
                    }

                    if (hasOwn(target, key) && isType(data[key])) {
                        if (!isType(target[key])) {
                            target[key] = {};
                        }

                        target[key] = merge(target[key], data[key]);
                    } else {
                        target[key] = data[key];
                    }
                }
            }

            return target;
        }

        if (typeof target === 'string') {
            return datas.reduce(
                (acc, str) => {
                    return acc + str;
                },
                target,
            );
        }
    }

    return null;
}
