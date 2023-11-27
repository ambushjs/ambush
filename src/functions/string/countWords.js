module.exports = function countWords(string) {
    const trimmedText = string.trim();
    const words = trimmedText.split(/\s+/);

    return words.length;
};
