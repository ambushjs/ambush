/** Unnest a nested object or an array into a single-level structure */
module.exports = function flatten(data, joiner = '.') {
    const result = Array.isArray(data) ? [] : {};

    (function recurse(current, property) {
        if (Object(current) !== current) {
            if (Array.isArray(data)) {
                result.push(current);
            } else {
                result[property] = current;
            }
        } else if (Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) {
                recurse(current[i], property ? `${property}[${i}]` : `[${i}]`);
            }
            if (current.length === 0) {
                if (Array.isArray(data)) {
                    result.push([]);
                } else {
                    result[property] = [];
                }
            }
        } else {
            let isEmpty = true;

            for (const p in current) {
                if (Object.prototype.hasOwnProperty.call(current, p)) {
                    isEmpty = false;
                    recurse(current[p], property ? `${property}${joiner}${p}` : p);
                }
            }

            if (isEmpty && property) {
                if (Array.isArray(data)) {
                    result.push({});
                } else {
                    result[property] = {};
                }
            }
        }
    }(data, ''));

    return result;
};
