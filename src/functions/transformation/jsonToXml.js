module.exports = function jsonToXml(json, rootName = 'root') {
    let xml = `<${rootName}>`;

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            if (Array.isArray(json[key])) {
                json[key].forEach(item => {
                    xml += jsonToXml({ [key]: item }).replace(/<\/?root>/g, '');
                });
            } else if (typeof json[key] === 'object') {
                xml += jsonToXml(json[key], key);
            } else {
                xml += `<${key}>${json[key]}</${key}>`;
            }
        }
    }

    return `${xml}</${rootName}>`;
}
