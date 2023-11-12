module.exports = function validURL(url) {
    return (/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).test(url);
};
