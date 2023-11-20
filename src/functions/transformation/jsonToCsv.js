module.exports = function jsonToCsv(json) {
    const headers = Object.keys(json[0]);

    const csv = [
        headers.join(','),
        ...json.map(row => headers.map((field) => row[field]).join(',')),
    ];

    return csv.join('\n');
}
