const languageMap = require('./langCodes.json');

module.exports = function getLang(languageCode) {
    const lowerCaseLanguageCode = languageCode ? languageCode.toLowerCase() : '';

    if (lowerCaseLanguageCode && Object.prototype.hasOwnProperty.call(languageMap, lowerCaseLanguageCode)) {
        return languageMap[lowerCaseLanguageCode];
    } else {
        return 'Unknown';
    }
};
