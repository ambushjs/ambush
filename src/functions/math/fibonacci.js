module.exports = function fibonacci(n, array) {
    let a = 1, b = 0;
    const arrayN = [b];

    while (n--) {
        [a, b] = [a + b, a];

        if (array) {
            arrayN.push(b);
        }
    }

    return array ? arrayN : b;
}
