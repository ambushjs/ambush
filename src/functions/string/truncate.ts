export function truncate(input: string, length?: number, suffix?: string) {
    const updatedLength = length ?? 10;
    return input.length <= updatedLength ? input : `${input.slice(0, updatedLength).trimEnd()}${suffix ?? '...'}`;
}

console.log(truncate('This is a long string', 10, '...Hi'))
