module.exports = function deduplicate(array) {
    return Array.from(new Set(array));
};
