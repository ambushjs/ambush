const unescapeMap = {
    '&quot;': '"',
    '&amp;': '&',
    '&#x27;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&#x60;': '`'
};

module.exports = function unescapeHtml(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/(&quot;|&amp;|&#x27;|&lt;|&gt;|&#x60;)/g, (match) => unescapeMap[match] ?? match);
};
