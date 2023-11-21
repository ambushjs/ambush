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

/**
 * Check if a year is a leap year.
 * 
 * @param year - The year to check (defaults to the current year).
 * @returns If the year is a leap year.
 */
export function leapYear(year?: number): boolean;

/**
 * Find the factorial of a number.
 * 
 * @param n - The number to caclulate the factorial.
 * @returns The factorial of the given number.
 */
export function factorial(n: number): number;

/**
 * Get the nth Fibonacci element or an array up to the nth element.
 * 
 * @param n - The nth of the fibonacci sequence.
 * @param array - Determines wether to generate an array.
 * @returns The nth Fibonacci element or an array up to the nth element.
 */
export function fibonacci(n: number, array: boolean): number | number[];

/**
 * Check if a number is even.
 * 
 * @param n - The input number to check.
 * @returns If a number is even.
 */
export function isEven(n: number): boolean;

/**
 * Check if a number is a prime number.
 * 
 * @param n - The input number to check.
 * @returns If a number is a prime number.
 */
export function isPrime(n: number): boolean;

/**
 * Find the mean (average) in an array with numbers.
 * 
 * @param numbers - The input numbers to check.
 * @returns The mean of the numbers.
 */
export function mean(numbers: number[]): number;

/**
 * Find the median (middle) in an array with numbers.
 * 
 * @param numbers - The input numbers to check.
 * @returns The median of the numbers.
 */
export function median(numbers: number[]): number;

/**
 * Find the mode (common) in an array with numbers.
 * 
 * @param numbers - The input numbers to check.
 * @returns The mode of the numbers.
 */
export function mode(numbers: number[]): number | number[];

/**
 * Generate an array of the Pascal's triangle with the specified length.
 * 
 * @param n - The input number to determine the triangle size.
 * @returns Pascal's triangle with the specified length.
 */
export function pascal(n: number): number[][];

/**
 * Chunk an array or an object into small groups.
 * 
 * @param data - The input array or object to chunk.
 * @param size - The size of each chunk.
 * @returns An array with the chunked data inside.
 */
export function chunk<T>(data: T[], size: number): T[];
export function chunk<T>(data: Obj<T>, size: number): Obj<T>[];

/**
 * Remove duplicated elements in an array or an object.
 * 
 * @param data - The input string, array or object to deduplicate.
 * @returns An array or an object with the deduplicated data inside.
 */
export function deduplicate(data: string): string[];
export function deduplicate<T>(data: T[]): T[];
export function deduplicate<T>(data: Obj<T>): Obj<T>;

/**
 * Find the symmetric difference between a string, an array or an object.
 * 
 * @param a - The first data to compare.
 * @param b - The second data to compare.
 * @returns An array with the different elements inside.
 */
export function difference(a: string, b: string): string[];
export function difference<T>(a: T[], b: T[]): T[];
export function difference<T>(a: Obj<T>, b: Obj<T>): Obj<T>[];

/**
 * Check if a string, an array, a symbol, or an object is empty.
 * 
 * @param value - The data to check if empty.
 * @returns Wether the input value is empty or not.
 */
export function empty(value: string): boolean;
export function empty<T>(value?: T[]): boolean;
export function empty(value: symbol): boolean;
export function empty<T>(value: Obj<T>): boolean;

/**
 * Extract the file extension from a string.
 * 
 * @param fileName - The input string to extract the file extension.
 * @returns The extracted file extension.
 */
export function fileExt(fileName: string): string;

/**
 * Unnest a nested array or object into a single-level structure.
 * 
 * @param data - The input array or object to flatten.
 * @param [joiner] - Joiner when joining two object names together.
 */
export function flatten<T>(data: T[], joiner?: string): T[];
export function flatten<T>(data: Obj<T>, joiner?: string): Obj<T>;

/**
 * Find duplicated elements in a string, an array, or an object.
 * 
 * @param datas - The datas to compare.
 * @returns An array or an object with the duplicate elements.
 */
export function intersection(...datas: string[]): string[];
export function intersection<T>(...datas: T[]): T[];
export function intersection<T>(...datas: Obj<T>[]): Obj<T>;

/**
 * Deeply merge a string, an array or an object together.
 * 
 * @param target - A target to merge into.
 * @param datas - The datas to merge.
 * @returns The merged datas.
 */
export function merge(target: string, ...datas: string[]): string;
export function merge<T>(target: T[], ...datas: T[]): T[];
export function merge<T>(target: Obj<T>, ...datas: Obj<T>[]): Obj<T>;

/**
 * Reverse a string, an array, or an object.
 * 
 * @param data - A string, an array or a object to reverse.
 * @returns The reversed data.
 */
export function reverse(data: string): string;
export function reverse<T>(data: T[]): T[];
export function reverse<T>(data: Obj<T>): Obj<T>;

/**
 * Randomly shuffle a string, an array, or an object.
 * 
 * @param data - A string, an array, or an object to shuffle.
 * @returns The shuffled data.
 */
export function shuffle<T>(data: string): string;
export function shuffle<T>(data: T[]): T[];
export function shuffle<T>(data: Obj<T>): Obj<T>;

/**
 * Sort a string, an array or an object alphabetically or ascendingly.
 * 
 * @param data - The input array or object to sort.
 * @returns The sorted data.
 */
export function sort<T>(data: T[]): T[];
export function sort<T>(data: Obj<T>): Obj<T>;

/**
 * An object with ANSI escape codes to decorate your console.
 */
export const colors: Colors;

/**
 * Get the size from an object.
 * 
 * @param data - The input object to check.
 * @returns The object size.
 */
export function objectSize<T>(data: Obj<T>): number;

/**
 * Convert a string to aLtErNaTiNgCaSe.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function altCase(input: string): string;

/**
 * Convert a string to camelCase.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function camelCase(input: string): string;

/**
 * Convert a string to kebab-case.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function kebabCase(input: string): string;

/**
 * Convert a string to lowercase.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function lowerCase(input: string): string;

/**
 * Convert a string to PascalCase.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function pascalCase(input: string): string;

/**
 * Convert a string to sentence case.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function sentenceCase(input: string): string;

/**
 * Convert a string to snake_case.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function snakeCase(input: string): string;

/**
 * Convert a string to Start Case.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function startCase(input: string): string;

/**
 * Switch cases in a string (lowercase to uppercase, vice versa).
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function switchCase(input: string): string;

/**
 * Convert a string to Title Case.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function titleCase(input: string): string;

/**
 * Convert a string to UPPERCASE.
 * 
 * @param input - The input string to convert.
 * @returns The converted string.
 */
export function upperCase(input: string): string;

/**
 * Escape special HTML characters in a string.
 * 
 * @param input - The input string to escape.
 * @returns The escaped string.
 */
export function escapeHtml(input: string): string;

/**
 * Unescape escaped HTML characters in a string.
 * 
 * @param input - The input string to unescape.
 * @returns The unescaped string.
 */
export function unescapeHtml(input: string): string;

/**
 * Count the number of occurrences of a substring in a string.
 * 
 * @param input - The input string to count.
 * @param substring - The substring to check in the input.
 * @param caseSensitive - Determines wether checking is case sensitive.
 * @returns How many times the substring was detected in the input.
 */
export function occurrences(input: string, substring: string, caseSensitive: boolean): number;

/**
 * Check if a string is a palindrome.
 * 
 * @param input - The input string to check.
 * @returns If the input is a palindrome.
 */
export function palindrome(input: string): boolean;

/**
 * Truncate a string.
 * 
 * @param input - The input string to truncate.
 * @param options - Additional options for the truncate length and ending.
 */
export function truncate(input: string, { length, ending }?: Options): string;

/**
 * Decode from a base64 string.
 * 
 * @param data - The input string to decode.
 * @returns The decoded string.
 */
export function base64Decode(data: string): string;

/**
 * Encode from a base64 string.
 * 
 * @param data - The input string to encode.
 * @returns The encoded string.
 */
export function base64Encode(data: string): string;

/**
 * Convert a CSV file to a JSON file format.
 * 
 * @param csv - The input CSV string to convert.
 * @returns An object with the converted JSON.
 */
export function csvToJson(csv: string): Obj<unknown>;

/**
 * Convert an object to a CSV file format.
 * 
 * @param json - The input object to covert.
 * @returns A string with the converted CSV.
 */
export function jsonToCsv<T>(json: Obj<T>): string;

/**
 * Convert an object to a XML file format.
 * 
 * @param json - The input object to convert.
 * @param rootName - A custom rootname for the XML.
 * @returns A string with the converted XML.
 */
export function jsonToXml<T>(json: Obj<T>, rootName?: string): string;

/**
 * Convert a XML file format to an object.
 * 
 * @param xml - The input XML string to convert.
 * @returns An object with the converted JSON.
 */
export function xmlToJson(xml: string): Obj<unknown>;

/**
 * Check if a string is a valid date.
 * 
 * @param dateStr - The input string to check.
 * @returns If the input is a valid date.
 */
export function validDate(dateStr: string): boolean;

/**
 * Check if a string is a valid email.
 * 
 * @param email - The input string to check.
 * @returns If the input is a valid email.
 */
export function validEmail(email: string): boolean;

/**
 * Check if a string is a valid IP adress.
 * 
 * @param ipAdress - The input string to check.
 * @returns If the input is a valid IP adress.
 */
export function validIP(ipAddress: string): boolean;

/**
 * Check if a number fits between the minimum and the maximum number.
 * 
 * @param value - The input number to check.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @returns If the input fits between the minimum and the maximum number.
 */
export function validRange(value: number, min: number, max: number): boolean;

/**
 * Check if a string is a valid time.
 * 
 * @param time - The input string to check.
 * @returns If the input is a valid time.
 */
export function validTime(time: string): boolean;

/**
 * Check if a string is a valid URL.
 * 
 * @param dateStr - The input string to check.
 * @returns If the input is a valid URL.
 */
export function validURL(url: string): boolean;

/**
 * Check if a string is a valid UUID.
 * 
 * @param dateStr - The input string to check.
 * @returns If the input is a valid UUID.
 */
export function validUUID(uuid: string): boolean;
