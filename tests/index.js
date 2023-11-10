const { colors } = require('../src');
const line = '-'.repeat(process.stdout.columns);

function printColor(color, text) {
    return console.log(`${colors[color]}${text}${colors.reset}`);
}

printColor('green', 'Tests starting!');

console.log(line);

printColor('magenta', 'Date tests running...');
require('./date.test')();
printColor('blue', 'Math tests running...');
require('./math.test')();
printColor('red', 'Multi-type tests running...');
require('./multi.test')();
printColor('yellow', 'String tests running...');
require('./string.test')();

console.log(line);

process.on('unhandledRejection', (err) => console.error(err));
process.on('uncaughtException', (err) => console.error(err));

console.log(`${colors.green}Tests finished!${colors.reset}`);
