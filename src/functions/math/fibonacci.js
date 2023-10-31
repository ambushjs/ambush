module.exports = function fibonacci(n, generateArray) {
    const arrayN = [];
    let temp = 0, a = 1, b = 0;

    while (n >= 0) {
        temp = a;
        a += b;
        b = temp;
        n--;

        if (generateArray) arrayN.push(b);
    }

    return generateArray ? arrayN : b;
}
