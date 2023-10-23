/** Remove duplicated elements in an object or an array. */
module.exports = function deduplicate(data) {
    if (typeof data !== 'object') return data;
    if (Array.isArray(data)) return Array.from(new Set(data));

    const deduplicated = {};

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            if (!Object.values(deduplicated).includes(value)) deduplicated[key] = value;
        }
    }

    return deduplicated;
};
