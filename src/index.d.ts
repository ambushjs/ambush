type Data = string | number | symbol;

export function chunk<T>(data: T, size: number): T;
export function deduplicate<T>(data: T): T;
export function difference<T, P>(a: T, b: P): T & P;
export function flatten<T>(data: T, joiner?: string): T;
export function intersection<T>(...items: T[]): T;
export function merge<T, P>(target: T, ...sources: P[]): T & P;
export function shuffle<T>(data: T): T;

export function camelCase(input: string): string;
export function kebabCase(input: string): string;
export function lowerCase(input: string): string;
export function pascalCase(input: string): string;
export function sentenceCase(input: string): string;
export function snakeCase(input: string): string;
export function startCase(input: string): string;
export function switchCase(input: string): string;
export function titleCase(input: string): string;
export function toggleCase(input: string): string;
export function upperCase(input: string): string;
export function escapeHtml(input: string): string;
export function unescapeHtml(input: string): string;
export function occurrences(input: string, substring: string): number;
export function palindrome(input: string): boolean;
export function reverseString(input: string): string;
export function truncate(input: string, length?: number, ending?: string): string;
