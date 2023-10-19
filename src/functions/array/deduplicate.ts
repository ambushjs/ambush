export function deduplicate<T>(array: T[]) {
    return Array.from(new Set(array));
}
