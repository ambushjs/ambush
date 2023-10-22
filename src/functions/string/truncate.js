module.exports = function truncate(input, length, ending) {
    if (typeof input !== 'string') return input;
    return input.length <= length ?? 10 ? input : `${input.substring(0, length ?? 10).trimEnd()}${ending ?? '...'}`;
};
