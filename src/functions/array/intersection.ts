import { deduplicate } from './deduplicate';

type AnyObject = Record<string | number | symbol, any>

export function intersection<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) return [];

    function convertToString(element: T) {
        if (typeof element === 'string') return element;
        return JSON.stringify(element);
    };

    const denested = arrays.reduce((acc, current) => acc.concat(current), [] as T[]);
    const seen: AnyObject = {};
    const elements = [];

    for (let i = 0; i < denested.length; i++) {
        const element = convertToString(denested[i]);

        if (seen[element]) elements.push(denested[i]);

        seen[element] = (seen[element] || 0) + 1;
    }

    return deduplicate(elements);
}
