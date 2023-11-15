module.exports = function fileExt(input) {
    if (input.length > 1000) {
        throw new RangeError('Input exceeds 1000 characters');
    }

    const lastDotIndex = input.lastIndexOf('.');

    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return '';
    }

    return input.slice(lastDotIndex + 1);
};
