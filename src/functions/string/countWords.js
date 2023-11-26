module.exports = function countWords(text) {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);

    return words.length;
};
