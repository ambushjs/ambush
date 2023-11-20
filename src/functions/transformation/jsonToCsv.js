module.exports = function jsonToCsv(data) {
    const headers = Object.keys(data[0]);

    const csv = [
        headers.join(','),
        ...data.map(row => headers.map((field) => row[field]).join(',')),
    ];

    return csv.join('\n');
}
