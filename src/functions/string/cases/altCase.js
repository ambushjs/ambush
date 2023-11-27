module.exports = function altCase(string) {
    let currentCase = true;
    const splitted = string.split('');

    return splitted.map((split) => {
        currentCase = !currentCase;
        return !currentCase === true ? split.toLowerCase() : split.toUpperCase();
    }).join('');
};
