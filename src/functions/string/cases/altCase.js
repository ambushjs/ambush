module.exports = function altCase(input) {
    let currentCase = true;
    const splitted = input.split('');

    return splitted.map((split) => {
        currentCase = !currentCase;
        return !currentCase === true ? split.toLowerCase() : split.toUpperCase();
    }).join('');
}
