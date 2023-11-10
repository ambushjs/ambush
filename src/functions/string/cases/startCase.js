module.exports = function startCase(input) {
    return input
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
