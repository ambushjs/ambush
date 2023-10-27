function hasOwn(arg, key) {
    return Object.prototype.hasOwnProperty.call(arg, key);
}

module.exports = function intersection(...items) {
    if (items.length === 0) return items[0];

    const firstItemType = typeof items[0];

    if (firstItemType === 'object' || Array.isArray(items[0])) {
        if (Array.isArray(items[0])) return items[0].filter((value) => items.every((item) => Array.isArray(item) ? item.includes(value) : hasOwn(item, value)));
        else if (firstItemType === 'object') {
            const result = {};

            for (const key in items[0]) {
                if (items.every((item) => hasOwn(item, key) && item[key] === items[0][key])) {
                    result[key] = items[0][key];
                }
            }

            return result;
        }
    } else if (firstItemType === 'string') {
        const result = new Set();

        for (const char of items[0]) {
            if (items.every((item) => typeof item === 'string' && item.includes(char))) {
                result.add(char);
            }
        }

        return Array.from(result);
    }
};
