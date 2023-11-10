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

type Name = string | number | symbol;
type NameType<T> = Record<string | number | symbol, T>;

export function daysAgo(days: number): DayInfo;
export declare function leapYear(year?: number): boolean;

export declare function factorial(n: number): number;
export declare function fibonacci(n: number, array: boolean): number | number[];
export declare function mean(numbers: number[]): number;
export declare function median(numbers: number[]): number;
export declare function mode(numbers: number[]): number | number[];
export declare function pascal(n: number): number[][];

export declare function chunk<T>(data: T[], size: number): T[];
export declare function chunk<T>(data: Record<Name, T>, size: number): Record<Name, T>[];
export declare function deduplicate<T>(data: T[]): T[];
export declare function deduplicate<T>(data: Record<Name, T>): Record<Name, T>;
export declare function difference(a: string, b: string): string[];
export declare function difference<T>(a: T[], b: T[]): T[];
export declare function difference<T>(a: Record<Name, T>, b: Record<Name, T>): Record<Name, T>[];
export declare function flatten<T>(data: T[], joiner?: string): T[];
export declare function flatten<T>(data: Record<Name, T>, joiner?: string): Record<Name, T>;
export declare function intersection<T>(...datas: T[]): T[];
export declare function intersection<T>(...datas: Record<Name, T>[]): Record<Name, T>;
export declare function intersection(...datas: string[]): string[];
export declare function merge(target: string, ...datas: string[]): string;
export declare function merge<T>(target: T[], ...datas: T[]): T[];
export declare function merge<T>(target: Record<Name, T>, ...datas: Record<Name, T>[]): Record<Name, T>;
export declare function reverse(data: string): string;
export declare function reverse<T>(data: T[]): T[];
export declare function reverse<T>(data: Record<Name, T>): Record<Name, T>;
export declare function shuffle<T>(data: string): string;
export declare function shuffle<T>(data: T[]): T[];
export declare function shuffle<T>(data: NameType<T>): NameType<T>;
export declare function sort<T>(data: number[]): number[];
export declare function sort<T>(data: string[]): string[];
export declare function sort<T>(data: string): string;
export declare function sort<T>(data: Record<Name, T>): Record<Name, T>;

export declare function altCase(input: string): string;
export declare function camelCase(input: string): string;
export declare function kebabCase(input: string): string;
export declare function lowerCase(input: string): string;
export declare function pascalCase(input: string): string;
export declare function sentenceCase(input: string): string;
export declare function snakeCase(input: string): string;
export declare function startCase(input: string): string;
export declare function switchCase(input: string): string;
export declare function titleCase(input: string): string;
export declare function upperCase(input: string): string;

export declare function escapeHtml(input: string): string;
export declare function unescapeHtml(input: string): string;
export declare function occurrences(input: string, substring: string): number;
export declare function palindrome(input: string): boolean;
export declare function truncate(input: string, { length, ending }: Options): string;
