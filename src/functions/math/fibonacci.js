module.exports = function fibonacci(n, generateArray) {
    const arrayN = [];

    let temp = 0,
        a = 1,
        b = 0,
        i = n;

    while (i >= 0) {
        temp = a;
        a += b;
        b = temp;
        i--;

        if (generateArray) arrayN.push(b);
    }

    return generateArray ? arrayN : b;
};
