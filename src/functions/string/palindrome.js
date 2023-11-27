module.exports = function palindrome(string) {
    const cleanStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
};
