export function chunk<T>(array: T[], size: number): T[][] {
    const chunkedArray: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }

    return chunkedArray;
}
