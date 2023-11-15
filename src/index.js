/**
 * SPDX-License-Identifier: Apache-2.0
 *
 * @copyright (c) 2023 Ambush
 * @author Zeptar <thezeptar@gmail.com>
 * @license Apache License 2.0
 */

/** Find exact information of the date of the number of days ago. */
exports.daysAgo = require('./functions/date/daysAgo');
/** Check if a year is a leap year. */
exports.leapYear = require('./functions/date/leapYear');

/** Find the factorial of a number. */
exports.factorial = require('./functions/math/factorial');
/** Find the nth, or generate an array of the Fibonacci sequence. */
exports.fibonacci = require('./functions/math/fibonacci');
/** Check if a number is an even number. */
exports.isEven = require('./functions/math/isEven');
/** Check if a number is a prime number. */
exports.isPrime = require('./functions/math/isPrime');
/** Find the mean (average) in an array with numbers. */
exports.mean = require('./functions/math/mean');
/** Find the median (middle) in an array with numbers. */
exports.median = require('./functions/math/median');
/** Find the mode (common) in an array with numbers. */
exports.mode = require('./functions/math/mode');
/** Generate an array of the Pascal's triangle with the specified length. */
exports.pascal = require('./functions/math/pascal');

/** Chunk an object or an array. */
exports.chunk = require('./functions/multi/chunk');
/** Remove duplicated elements in an object or an array. */
exports.deduplicate = require('./functions/multi/deduplicate');
/** Find the symmetric difference between an object, array or a string. */
exports.difference = require('./functions/multi/difference');
/** Get the file extension from the file name. */
exports.fileExt = require('./functions/multi/fileExt');
/** Unnest a nested object or an array into a single-level structure. */
exports.flatten = require('./functions/multi/flatten');
/** Find duplicate elements in a object, string or an array. */
exports.intersection = require('./functions/multi/intersection');
/** Deeply merge an object, array or a string together. */
exports.merge = require('./functions/multi/merge');
/** Reverse an array, object or a string. */
exports.reverse = require('./functions/multi/reverse');
/** Randomly shuffle an object, array or a string. */
exports.shuffle = require('./functions/multi/shuffle');
/** Sort an object, array or a string alphabetically or ascendingly. */
exports.sort = require('./functions/multi/sort');

/** An object with ANSI escape codes. */
exports.colors = require('./functions/objects/colors');

/** Convert a string to aLtErNaTiNgCaSe. */
exports.altCase = require('./functions/string/cases/altCase');
/** Convert a string to camelCase. */
exports.camelCase = require('./functions/string/cases/camelCase');
/** Convert a string to kebab-case. */
exports.kebabCase = require('./functions/string/cases/kebabCase');
/** Convert a string to lowercase. */
exports.lowerCase = require('./functions/string/cases/lowerCase');
/** Convert a string to PascalCase. */
exports.pascalCase = require('./functions/string/cases/pascalCase');
/** Convert a string to sentence case. */
exports.sentenceCase = require('./functions/string/cases/sentenceCase');
/** Convert a string to snake_case. */
exports.snakeCase = require('./functions/string/cases/snakeCase');
/** Convert a string to Start Case. */
exports.startCase = require('./functions/string/cases/startCase');
/** Switch cases in a string (lowercase to uppercase, vice versa). */
exports.switchCase = require('./functions/string/cases/switchCase');
/** Convert a string to Title Case. */
exports.titleCase = require('./functions/string/cases/titleCase');
/** Convert a string to UPPERCASE. */
exports.upperCase = require('./functions/string/cases/upperCase');
/** Escape special HTML characters in a string. */
exports.escapeHtml = require('./functions/string/html/escapeHtml');
/** Unescape escaped HTML characters in a string. */
exports.unescapeHtml = require('./functions/string/html/unescapeHtml');
/** Count the number of occurrences of a substring in a string. */
exports.occurrences = require('./functions/string/occurrences');
/** Check if a string is palindrome. */
exports.palindrome = require('./functions/string/palindrome');
/** Truncate a string. */
exports.truncate = require('./functions/string/truncate');

exports.base64Decode = require('./functions/transcode/base64Decode');
exports.base64Encode = require('./functions/transcode/base64Encode');

exports.validDate = require('./functions/validation/validDate');
exports.validEmail = require('./functions/validation/validEmail');
exports.validIP = require('./functions/validation/validIP');
exports.validRange = require('./functions/validation/validRange');
exports.validTime = require('./functions/validation/validTime');
exports.validURL = require('./functions/validation/validURL');
exports.validUUID = require('./functions/validation/validUUID');

/** Export image utilities from ambush/image */
Object.assign(exports, require('@ambush/image'));
