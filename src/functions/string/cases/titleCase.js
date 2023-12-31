module.exports = function titleCase(string) {
    const lowercaseWords = ['the', 'and', 'a', 'an', 'in', 'of', 'on', 'for', 'to', 'with'];
    const words = string.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i === 0 || !lowercaseWords.includes(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
};
