module.exports = function deduplicate(data) {
    if (Array.isArray(data)) {
        return Array.from(new Set(data));
    }

    if (typeof data === 'object') {
        const deduplicated = {};

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];

                if (!Object.values(deduplicated).includes(value)) {
                    deduplicated[key] = value;
                }
            }
        }

        return deduplicated;
    }

    if (typeof data === 'string') {
        return deduplicate(data.split(''));
    }

    return null;
};
