/**
 * SPDX-License-Identifier: Apache-2.0
 *
 * @copyright (c) 2023 Ambush
 * @author Zeptar <thezeptar@gmail.com>
 * @license Apache License 2.0
 */

exports.chunk = require('./functions/array/chunk');
exports.deduplicate = require('./functions/array/deduplicate');
exports.intersection = require('./functions/array/intersection');
exports.shuffle = require('./functions/array/shuffle');

exports.difference = require('./functions/multi/difference');
exports.merge = require('./functions/multi/merge');

exports.camelCase = require('./functions/string/cases/camelCase');
exports.kebabCase = require('./functions/string/cases/kebabCase');
exports.lowerCase = require('./functions/string/cases/lowerCase');
exports.pascalCase = require('./functions/string/cases/pascalCase');
exports.sentenceCase = require('./functions/string/cases/sentenceCase');
exports.snakeCase = require('./functions/string/cases/snakeCase');
exports.startCase = require('./functions/string/cases/startCase');
exports.titleCase = require('./functions/string/cases/titleCase');
exports.toggleCase = require('./functions/string/cases/toggleCase');
exports.upperCase = require('./functions/string/cases/upperCase');

exports.escapeHtml = require('./functions/string/html/escapeHtml');
exports.unescapeHtml = require('./functions/string/html/unescapeHtml');

exports.occurrences = require('./functions/string/occurrences');
exports.palindrome = require('./functions/string/palindrome');
exports.reverseString = require('./functions/string/reverseString');
exports.truncate = require('./functions/string/truncate');
