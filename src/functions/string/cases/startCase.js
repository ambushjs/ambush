module.exports = function startCase(string) {
    return string
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
};
