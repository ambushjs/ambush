module.exports = function truncate(input, length, ending) {
    return input.length <= length ?? 10 ? input : `${input.substring(0, length ?? 10).trimEnd()}${ending ?? '...'}`;
};
