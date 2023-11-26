module.exports = function countWords(input) {
    const trimmedText = input.trim();
    const words = trimmedText.split(/\s+/);

    return words.length;
};
