function pascalRecursive(n, a) {
    if (n < 2) return a;

    const prevRow = a[a.length - 1];
    let curRow = [1];

    for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i - 1];
    }

    curRow.push(1);
    a.push(curRow);

    return pascalRecursive(n - 1, a);
}

module.exports = function pascal(n) {
    if (!n) throw new TypeError('[Ambush] Parameter is missing');

    let triangleA = pascalRecursive(n, [[1]]);
    let s = [];

    for (let i = 0; i < triangleA.length; i++) {
        s.push(triangleA[i]);
    }

    return s;
}
