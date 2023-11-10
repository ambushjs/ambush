module.exports = function mode(numbers) {
    const numberCount = {};

    let maxCount = 0;
    let array = [];

    for (const number of numbers) {
        if (!numberCount[number]) {
            numberCount[number] = 1;
        } else {
            numberCount[number]++;
        }

        if (numberCount[number] > maxCount) {
            maxCount = numberCount[number];
            array = [number];
        } else if (numberCount[number] === maxCount && !array.includes(number)) {
            array.push(number);
        }
    }

    return array.length === 1 ? array[0] : array;
};
