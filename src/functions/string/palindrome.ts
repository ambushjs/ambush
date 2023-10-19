export function palindrome(input: string) {
    const replaced = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return replaced === replaced.split('').reverse().join('');
}
