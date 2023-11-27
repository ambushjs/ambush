module.exports = function lowerCase(string) {
    return typeof string === 'string' ? string.toLowerCase() : string;
};
