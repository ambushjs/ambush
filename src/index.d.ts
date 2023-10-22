export function chunk<T>(array: T[], size: number): T[][];
export function deduplicate<T>(array: T[]): T[];
export function intersection<T>(arrays: T[][]): T[];
export function shuffle<T>(array: T[]): T[];

export function difference<T>(a: T, b: T): T;
export function flatten<T>(arg: T, joiner?: string): T;
export function merge<T, P>(target: T, ...sources: P[]): P;

export function camelCase(input: string): string;
export function kebabCase(input: string): string;
export function lowerCase(input: string): string;
export function pascalCase(input: string): string;
export function sentenceCase(input: string): string;
export function snakeCase(input: string): string;
export function startCase(input: string): string;
export function titleCase(input: string): string;
export function toggleCase(input: string): string;
export function upperCase(input: string): string;

export function escapeHtml(input: string): string;
export function unescapeHtml(input: string): string;

export function occurrences(input: string, substring: string): number;
export function palindrome(input: string): boolean;
export function reverseString(input: string): string;
export function truncate(input: string, length?: number, ending?: string): string;
