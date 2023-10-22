const escapeMap = {
    '"': '&quot;',
    '&': '&amp;',
    '\'': '&#x27;',
    '<': '&lt;',
    '>': '&gt;',
    '`': '&#x60;'
};

module.exports = function escapeHtml(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/["&'<>`]/g, (match) => escapeMap[match] ?? match);
};
