module.exports = function base64Encode(data) {
    const buffer = Buffer.from(data);
    return buffer.toString('base64');
};
