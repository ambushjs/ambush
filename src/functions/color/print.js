module.exports = function print(type, ...args) {
    const colors = [];

    for (const color of type) {
        colors.push(require('./ansiCodes')[color]);
    }

    return console.log(`${colors.join('')}${args.join(' ')}\x1b[0m`);
}
