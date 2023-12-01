function isType(input, type) {
    return typeof input === type;
}

function checkString(data, subdata) {
    const pattern = new RegExp(subdata, 'g');
    const matches = data.match(pattern);

    return matches ? matches.length : 0;
}

function checkArray(data, subdata) {
    let count = 0;

    for (const element of data) {
        if (element === subdata) {
            count++;
        }
    }

    return count;
}

module.exports = function occurrences(data, subdata) {
    if (isType(data, 'number') && isType(subdata, 'number')) {
        return checkString(String(data), String(subdata));
    }

    if (isType(data, 'string') && isType(subdata, 'string')) {
        return checkString(data, subdata);
    }

    if (Array.isArray(data) && Array.isArray(subdata)) {
        return checkArray(data, subdata);
    }

    if (isType(data, 'object') && isType(subdata, 'string')) {
        return checkArray(Object.keys(data), subdata);
    }

    return null;
};
