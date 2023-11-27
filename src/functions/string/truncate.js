module.exports = function truncate(string, { length = 10, ending = '...' } = {}) {
    return string.length <= length ? string : `${string.substring(0, length).trimEnd()}${ending}`;
};
