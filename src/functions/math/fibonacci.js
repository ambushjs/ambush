module.exports = function fibonacci(n, generateArray) {
    let a = 1, b = 0;
    const arrayN = generateArray ? [b] : undefined;

    while (n--) {
        [a, b] = [a + b, a];

        if (generateArray) {
            arrayN.push(b);
        }
    }

    return generateArray ? arrayN : b;
};
