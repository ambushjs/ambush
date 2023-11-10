function hasOwn(data, key) {
    return Object.prototype.hasOwnProperty.call(data, key);
}

module.exports = function difference(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        const set1 = new Set(a);
        const set2 = new Set(b);

        const result = [];

        for (const item of a) {
            if (!set2.has(item)) {
                result.push(item);
            }
        }

        for (const item of b) {
            if (!set1.has(item)) {
                result.push(item);
            }
        }

        return result;
    }

    if (typeof a === 'object' && typeof b === 'object') {
        const result = {};

        for (const key in a) {
            if (hasOwn(a, key)) {
                if (hasOwn(b, key) && a[key] === b[key] ) {
                    continue;
                }

                result[key] = a[key];
            }
        }

        for (const key in b) {
            if (hasOwn(b, key) && !hasOwn(a, key)) {
                result[key] = b[key];
            }
        }

        return result;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        const result = [];

        for (const char of a) {
            if (!b.includes(char)) {
                result.push(char);
            }
        }

        for (const char of b) {
            if (!a.includes(char)) {
                result.push(char);
            }
        }

        return result;
    }

    return null;
};
