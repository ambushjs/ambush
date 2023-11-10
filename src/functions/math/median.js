module.exports = function median(numbers) {
    numbers.sort((a, b) => {
        return a - b;
    });

    const middle = Math.floor(numbers.length / 2);

    return numbers.length % 2 === 0 ?
        (numbers[middle - 1] + numbers[middle]) / 2 :
        numbers[middle];
};
