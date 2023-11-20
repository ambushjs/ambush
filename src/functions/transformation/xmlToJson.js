module.exports = function xmlToJson(xml) {
    const result = {};
    const regex = /<([^>]+)>/g;

    let match = null;
    let startIndex = 0;

    while ((match = regex.exec(xml)) !== null) {
        const tag = match[1];
        const endTag = `</${tag}>`;
        const matchIndex = match.index;

        if (startIndex !== matchIndex) {
            const textContent = xml.substring(startIndex, matchIndex).trim();

            if (textContent.length > 0) {
                result[tag.substring(1)] = textContent;
            }
        }

        startIndex = matchIndex + endTag.length - 1;
    }

    return result;
}
