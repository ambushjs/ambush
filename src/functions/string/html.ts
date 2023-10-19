interface MapType {
    [key: string]: string;
}

const escapeRegex = /["&'<>`]/g;
const unescapeRegex = /(&quot;|&amp;|&#x27;|&lt;|&gt;|&#x60;)/g;

const escapeMap: MapType = {
    '"': '&quot;',
    '&': '&amp;',
    '\'': '&#x27;',
    '<': '&lt;',
    '>': '&gt;',
    '`': '&#x60;'
};

const unescapeMap: MapType = {
    '&quot;': '"',
    '&amp;': '&',
    '&#x27;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&#x60;': '`'
};

export function escapeHtml(input: string) {
    return input.replace(escapeRegex, (match) => escapeMap[match] ?? match);
}

export function unescapeHtml(input: string) {
    return input.replace(unescapeRegex, (match) => unescapeMap[match] ?? match);
}
