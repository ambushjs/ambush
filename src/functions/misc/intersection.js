function hasOwn(arg, key) {
    return Object.prototype.hasOwnProperty.call(arg, key);
}

module.exports = function intersection(...datas) {
    const firstItemType = typeof datas[0];

    if (Array.isArray(datas[0])) {
        const result = [];

        valueLoop: for (const value of datas[0]) {
            for (const item of datas) {
                if (!(Array.isArray(item) ? item.includes(value) : hasOwn(item, value))) {
                    continue valueLoop;
                }
            }

            result.push(value);
        }

        return result;
    }

    if (firstItemType === 'object') {
        const result = {};

        valueLoop: for (const key in datas[0]) {
            if (hasOwn(datas[0], key)) {
                for (const item of datas) {
                    if (!(hasOwn(item, key) && item[key] === datas[0][key])) {
                        continue valueLoop;
                    }
                }

                result[key] = datas[0][key];
            }
        }

        return result;
    }

    if (firstItemType === 'string') {
        const result = new Set();

        for (const char of datas[0]) {
            if (datas.every((item) => typeof item === 'string' && item.includes(char))) {
                result.add(char);
            }
        }

        return Array.from(result);
    }
};
