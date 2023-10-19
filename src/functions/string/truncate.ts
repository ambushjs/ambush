export function truncate(input: string, length?: number, suffix?: string) {
    const updatedLength = length ?? 10;
    return input.length <= updatedLength ? input : `${input.slice(0, updatedLength)}${suffix ?? ''}`;
}
