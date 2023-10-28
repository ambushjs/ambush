import ansiCodes from './functions/color/ansiCodes';

type Data = string | number | symbol;
type ColorTypes = typeof ansiCodes;

export function printColor<T>(type: ColorTypes, ...args: T[]): void;

export function chunk<T>(data: T, size: number): T;
export function deduplicate<T>(data: T): T;
export function difference<T, P>(a: T, b: P): T & P;
export function flatten<T>(data: T, joiner?: string): T;
export function intersection<T>(...datas: T[]): T;
export function merge<T, P>(target: T, ...datas: P[]): T & P;
export function reverse<T>(data: T): T;
export function shuffle<T>(data: T): T;

export function alphaCase(input: string): string;
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
export function truncate(input: string, length?: number, ending?: string): string;
