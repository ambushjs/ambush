module.exports = function jsonToXml(json, rootName = 'root') {
    let xml = `<${rootName}>`;

    for (const key in json) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
            const data = json[key];

            if (Array.isArray(data)) {
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    xml += jsonToXml({ [key]: item }).replace(/<\/?root>/g, '');
                }
            } else if (typeof data === 'object') {
                xml += jsonToXml(data, key);
            } else {
                xml += `<${key}>${data}</${key}>`;
            }
        }
    }

    return `${xml}</${rootName}>`;
};
