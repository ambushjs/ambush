module.exports = function pascalCase(input) {
    return input
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
};
