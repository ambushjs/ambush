export function occurrences(input: string, substring: string) {
    if (!input || !substring) return 0;

    let count = 0;
    let startIndex = 0;

    while (startIndex !== -1) {
        startIndex = input.indexOf(substring, startIndex);
        if (startIndex !== -1) {
            count++;
            startIndex += substring.length;
        }
    }

    return count;
}
