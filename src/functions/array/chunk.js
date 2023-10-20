module.exports = function chunk(array, size) {
    const chunkedArray = [];

    for (let i = 0; i < array.length; i += size) {
        const chunked = array.slice(i, i + size);
        chunkedArray.push(chunked);
    }

    return chunkedArray;
};
