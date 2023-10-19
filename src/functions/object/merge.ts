type AnyObject = Record<string | number | symbol, any>;

function isObject<T>(item: T) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

export function merge<T>(target = {}, ...sources: T[]): AnyObject {
    const updated = isObject(target) ? target : {};

    if (!sources.length) return updated;
    else if (isObject(updated) && sources.every(isObject)) return Object.assign({}, updated, ...sources);

    return merge(target, ...sources);
}
