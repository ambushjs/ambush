module.exports = function truncate(input, length, ending) {
    const updatedLength = length ?? 10;
    return input.length <= updatedLength ? input : `${input.slice(0, updatedLength).trimEnd()}${ending ?? '...'}`;
};
