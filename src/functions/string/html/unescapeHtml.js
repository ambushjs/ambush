const unescapeMap = {
    '&quot;': '"',
    '&amp;': '&',
    '&#x27;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&#x60;': '`'
};

module.exports = function unescapeHtml(input) {
    return input.replace(/(&quot;|&amp;|&#x27;|&lt;|&gt;|&#x60;)/g, (match) => unescapeMap[match] ?? match);
}
