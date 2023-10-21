module.exports = function calculateSymmetricDifference(a, b) {
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
    } else if (typeof a === 'object' && typeof b === 'object') {
        const result = {};

        for (const key in a) {
            if (a.hasOwnProperty(key)) {
                if (b.hasOwnProperty(key) && a[key] === b[key]) {
                    continue;
                }
                result[key] = a[key];
            }
        }

        for (const key in b) {
            if (b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
                result[key] = b[key];
            }
        }

        return result;
    } else if (typeof a === 'string' && typeof b === 'string') {
        let result = '';

        for (const char of a) {
            if (!b.includes(char)) {
                result += char;
            }
        }

        for (const char of b) {
            if (!a.includes(char)) {
                result += char;
            }
        }

        return result;
    }

    throw new TypeError('Unsupported data types for symmetric difference');
}
