module.exports = function truncate(input, { length = 10, ending = '...' } = {}) {
    return input.length <= length ? input : `${input.substring(0, length).trimEnd()}${ending}`;
}
