const deduplicate = require('./deduplicate');

function convertToString(element) {
    if (typeof element === 'string') return element;
    return JSON.stringify(element);
}

module.exports = function intersection(...arrays) {
    if (arrays.length === 0) return [];

    const denested = arrays.reduce((acc, current) => acc.concat(current), []);
    const seen = {};
    const elements = [];

    for (let i = 0; i < denested.length; i++) {
        const element = convertToString(denested[i]);

        if (seen[element]) elements.push(denested[i]);

        seen[element] = (seen[element] || 0) + 1;
    }

    return deduplicate(elements);
};
