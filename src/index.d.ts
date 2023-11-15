interface DayInfo {
    day: string;
    year: number;
    week: number;
    date: string;
}

interface Options {
    length?: number;
    ending?: string;
}

interface Colors {
    reset: string;
    bright: string;
    dim: string;
    italic: string;
    underline: string;
    slowBlink: string;
    fastBlink: string;
    reverse: string;
    hidden: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    gray: string;
    crismon: string;
    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;
    bgGray: string;
    bgCrimson: string;
}

type Obj<T> = Record<string | number | symbol, T>;

/**
 * Find exact information of the date of the number of days ago.
 * 
 * @param days - The number of days before to check.
 * @returns Information of the number of days ago.
 */
export function daysAgo(days: number): DayInfo;
/** Check if a year is a leap year. */
export function leapYear(year?: number): boolean;

/** Find the factorial of a number. */
export function factorial(n: number): number;
/** Find the nth, or generate an array of the Fibonacci sequence. */
export function fibonacci(n: number, array: boolean): number | number[];
/** Check if a number is an even number. */
export function isEven(n: number): boolean;
/** Check if a number is a prime number. */
export function isPrime(n: number): boolean;
/** Find the mean (average) in an array with numbers. */
export function mean(numbers: number[]): number;
/** Find the median (middle) in an array with numbers. */
export function median(numbers: number[]): number;
/** Find the mode (common) in an array with numbers. */
export function mode(numbers: number[]): number | number[];
/** Generate an array of the Pascal's triangle with the specified length. */
export function pascal(n: number): number[][];

/** Chunk an object or an array. */
export function chunk<T>(data: T[], size: number): T[];
export function chunk<T>(data: Obj<T>, size: number): Obj<T>[];
/** Remove duplicated elements in an object or an array. */
export function deduplicate(data: string): string[];
export function deduplicate<T>(data: T[]): T[];
export function deduplicate<T>(data: Obj<T>): Obj<T>;
/** Find the symmetric difference between an object, array or a string. */
export function difference(a: string, b: string): string[];
export function difference<T>(a: T[], b: T[]): T[];
export function difference<T>(a: Obj<T>, b: Obj<T>): Obj<T>[];
/** Get the file extension from the file name. */
export function fileExt<T>(fileName: string, opts: Obj<T>): string;
/** Unnest a nested object or an array into a single-level structure. */
export function flatten<T>(data: T[], joiner?: string): T[];
export function flatten<T>(data: Obj<T>, joiner?: string): Obj<T>;
/** Find duplicated elements in a object, string or an array. */
export function intersection(...datas: string[]): string[];
export function intersection<T>(...datas: T[]): T[];
export function intersection<T>(...datas: Obj<T>[]): Obj<T>;
/** Deeply merge an object, array or a string together. */
export function merge(target: string, ...datas: string[]): string;
export function merge<T>(target: T[], ...datas: T[]): T[];
export function merge<T>(target: Obj<T>, ...datas: Obj<T>[]): Obj<T>;
/** Reverse an array, object or a string. */
export function reverse(data: string): string;
export function reverse<T>(data: T[]): T[];
export function reverse<T>(data: Obj<T>): Obj<T>;
/** Randomly shuffle an object, array or a string. */
export function shuffle<T>(data: string): string;
export function shuffle<T>(data: T[]): T[];
export function shuffle<T>(data: Obj<T>): Obj<T>;
/** Sort an object, array or a string alphabetically or ascendingly. */
export function sort<T>(data: number[]): number[];
export function sort<T>(data: string[]): string[];
export function sort<T>(data: string): string;
export function sort<T>(data: Obj<T>): Obj<T>;

/** An object with ANSI escape codes. */
export const colors: Colors;

/** Convert a string to aLtErNaTiNgCaSe. */
export function altCase(input: string): string;
/** Convert a string to camelCase. */
export function camelCase(input: string): string;
/** Convert a string to kebab-case. */
export function kebabCase(input: string): string;
/** Convert a string to lowercase. */
export function lowerCase(input: string): string;
/** Convert a string to PascalCase. */
export function pascalCase(input: string): string;
/** Convert a string to sentence case. */
export function sentenceCase(input: string): string;
/** Convert a string to snake_case. */
export function snakeCase(input: string): string;
/** Convert a string to Start Case. */
export function startCase(input: string): string;
/** Switch cases in a string (lowercase to uppercase, vice versa). */
export function switchCase(input: string): string;
/** Convert a string to Title Case. */
export function titleCase(input: string): string;
/** Convert a string to UPPERCASE. */
export function upperCase(input: string): string;

/** Escape special HTML characters in a string. */
export function escapeHtml(input: string): string;
/** Unescape escaped HTML characters in a string. */
export function unescapeHtml(input: string): string;
/** Count the number of occurrences of a substring in a string. */
export function occurrences(input: string, substring: string): number;
/** Check if a string is palindrome. */
export function palindrome(input: string): boolean;
/** Truncate a string. */
export function truncate(input: string, { length, ending }: Options): string;
