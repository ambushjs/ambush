const escapeMap = {
    '"': '&quot;',
    '&': '&amp;',
    '\'': '&#x27;',
    '<': '&lt;',
    '>': '&gt;',
    '`': '&#x60;'
};

module.exports = function escapeHtml(string) {
    return string.replace(/["&'<>`]/g, (match) => escapeMap[match] ?? match);
};
