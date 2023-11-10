function hasOwn(data, key) {
    return Object.prototype.hasOwnProperty.call(data, key);
}

module.exports = function intersection(...datas) {
    const firstItemType = typeof datas[0];

    if (Array.isArray(datas[0])) {
        return datas[0].filter((value) => {
            return datas.every((item) => {
                return Array.isArray(item) ? item.includes(value) : hasOwn(item, value);
            });
        });
    } else if (firstItemType === 'object') {
        const result = {};

        for (const key in datas[0]) {
            if (datas.every((item) => hasOwn(item, key) && item[key] === datas[0][key])) {
                result[key] = datas[0][key];
            }
        }

        return result;
    } else if (firstItemType === 'string') {
        const result = new Set();

        for (const char in datas[0]) {
            if (datas.every((item) => typeof item === 'string' && item.includes(char))) {
                result.add(char);
            }
        }

        return Array.from(result);
    }

    return null;
};
