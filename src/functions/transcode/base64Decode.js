module.exports = function base64Decode(data) {
    const buffer = Buffer.from(data, 'base64');
    return buffer.toString('utf-8');
};
