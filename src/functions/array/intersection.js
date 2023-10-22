const deduplicate = require('./deduplicate');

function convertToString(element) {
    return typeof element === 'string' ? element : JSON.stringify(element);
}

module.exports = function intersection(...arrays) {
    if (arrays.length === 0) return [];

    const denested = arrays.reduce((acc, current) => acc.concat(current), []);
    const seen = new Set();
    const elements = [];

    for (let i = 0; i < denested.length; i++) {
        const element = convertToString(denested[i]);

        if (seen.has(element)) elements.push(denested[i]);

        seen.add(element);
    }

    return deduplicate(elements);
};
