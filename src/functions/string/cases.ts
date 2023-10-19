export function camelCase(input: string) {
    return input.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

export function kebabCase(input: string) {
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]+/g, '-')
        .toLowerCase();
}

export function lowerCase(input: string) {
    return input.toLowerCase();
}

export function pascalCase(input: string) {
    return input
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

export function sentenceCase(input: string) {
    const sentences = input.match(/[^.!?]+[.!?]*/g);

    if (!sentences) return input;

    const sentenceCaseSentences = sentences.map((sentence) => {
        sentence = sentence.trim();

        return sentence.length > 0 ?
            sentence.charAt(0).toUpperCase() + sentence.substring(1).toLowerCase() :
            sentence;
    });

    return sentenceCaseSentences.join(' ');
}

export function snakeCase(input: string) {
    return input
        .replace(/[-\s]/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
}

export function startCase(input: string) {
    return input
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function titleCase(input: string) {
    const lowercaseWords = ['the', 'and', 'a', 'an', 'in', 'of', 'on', 'for', 'to', 'with'];
    const words = input.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i === 0 || !lowercaseWords.includes(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
}

export function toggleCase(input: string) {
    return input
        .split('')
        .map((char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
        .join('');
}

export function upperCase(input: string) {
    return typeof input === 'string' ? input.toUpperCase() : input;
}
