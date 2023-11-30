const patterns = require('./patterns');

module.exports = function detectLang(string) {
    const languageCounts = {};
    const text = string.toLowerCase();

    for (const language in patterns) {
        const matches = text.match(patterns[language]) || [];

        languageCounts[language] = matches.length;
    }

    const lang = Object.keys(languageCounts).reduce((a, b) => {
        return languageCounts[a] > languageCounts[b] ? a : b;
    });

    return lang ?? 'unknown';
};
