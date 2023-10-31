module.exports = function mode(numbers) {
    if (!numbers.length) return 0;

    const numberCount = {};

    let maxCount = 0;
    let mode = [];

    for (const number of numbers) {
        if (!numberCount[number]) numberCount[number] = 1;
        else numberCount[number]++;

        if (numberCount[number] > maxCount) {
            maxCount = numberCount[number];
            mode = [number];
        } else if (numberCount[number] === maxCount && !mode.includes(number)) mode.push(number);
    }

    return mode.length === 1 ? mode[0] : mode;
}
