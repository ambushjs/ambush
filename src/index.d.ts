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

export function daysAgo(days: number): DayInfo;
export function leapYear(year?: number): boolean;

export function factorial(n: number): number;
export function fibonacci(n: number, array: boolean): number | number[];
export function isEven(n: number): boolean;
export function isPrime(n: number): boolean;
export function mean(numbers: number[]): number;
export function median(numbers: number[]): number;
export function mode(numbers: number[]): number | number[];
export function pascal(n: number): number[][];

export function chunk<T>(data: T[], size: number): T[];
export function chunk<T>(data: Obj<T>, size: number): Obj<T>[];
export function deduplicate(data: string): string[];
export function deduplicate<T>(data: T[]): T[];
export function deduplicate<T>(data: Obj<T>): Obj<T>;
export function difference(a: string, b: string): string[];
export function difference<T>(a: T[], b: T[]): T[];
export function difference<T>(a: Obj<T>, b: Obj<T>): Obj<T>[];
export function fileExt<T>(fileName: string, opts: Obj<T>): string;
export function flatten<T>(data: T[], joiner?: string): T[];
export function flatten<T>(data: Obj<T>, joiner?: string): Obj<T>;
export function intersection(...datas: string[]): string[];
export function intersection<T>(...datas: T[]): T[];
export function intersection<T>(...datas: Obj<T>[]): Obj<T>;
export function merge(target: string, ...datas: string[]): string;
export function merge<T>(target: T[], ...datas: T[]): T[];
export function merge<T>(target: Obj<T>, ...datas: Obj<T>[]): Obj<T>;
export function reverse(data: string): string;
export function reverse<T>(data: T[]): T[];
export function reverse<T>(data: Obj<T>): Obj<T>;
export function shuffle<T>(data: string): string;
export function shuffle<T>(data: T[]): T[];
export function shuffle<T>(data: Obj<T>): Obj<T>;
export function sort<T>(data: number[]): number[];
export function sort<T>(data: string[]): string[];
export function sort<T>(data: string): string;
export function sort<T>(data: Obj<T>): Obj<T>;

export const colors: Colors;

export function altCase(input: string): string;
export function camelCase(input: string): string;
export function kebabCase(input: string): string;
export function lowerCase(input: string): string;
export function pascalCase(input: string): string;
export function sentenceCase(input: string): string;
export function snakeCase(input: string): string;
export function startCase(input: string): string;
export function switchCase(input: string): string;
export function titleCase(input: string): string;
export function upperCase(input: string): string;

export function escapeHtml(input: string): string;
export function unescapeHtml(input: string): string;
export function occurrences(input: string, substring: string): number;
export function palindrome(input: string): boolean;
export function truncate(input: string, { length, ending }: Options): string;
