module.exports = function palindrome(input) {
    if (typeof input !== 'string') return input;

    const replaced = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return replaced === replaced.split('').reverse().join('');
};
