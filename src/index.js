/**
 * SPDX-License-Identifier: Apache-2.0
 *
 * @copyright (c) 2023 Ambush
 * @author Zeptar <thezeptar@gmail.com>
 * @license Apache License 2.0
 */;

exports.TypeCodes = require('./enums/TypeCodes');

exports.predictXOR = require('./functions/ai/predictXOR');

exports.daysAgo = require('./functions/date/daysAgo');
exports.leapYear = require('./functions/date/leapYear');

exports.detectLang = require('./functions/lang/detectLang');
exports.getLang = require('./functions/lang/getLang');

exports.factorial = require('./functions/math/factorial');
exports.fibonacci = require('./functions/math/fibonacci');
exports.isEven = require('./functions/math/isEven');
exports.isPrime = require('./functions/math/isPrime');
exports.mean = require('./functions/math/mean');
exports.median = require('./functions/math/median');
exports.mode = require('./functions/math/mode');
exports.pascal = require('./functions/math/pascal');

exports.chunk = require('./functions/misc/chunk');
exports.currentIP = require('./functions/misc/currentIP');
exports.deduplicate = require('./functions/misc/deduplicate');
exports.difference = require('./functions/misc/difference');
exports.empty = require('./functions/misc/empty');
exports.fileExt = require('./functions/misc/fileExt');
exports.flatten = require('./functions/misc/flatten');
exports.intersection = require('./functions/misc/intersection');
exports.merge = require('./functions/misc/merge');
exports.occurrences = require('./functions/misc/occurrences');
exports.random = require('./functions/misc/random');
exports.reverse = require('./functions/misc/reverse');
exports.shuffle = require('./functions/misc/shuffle');
exports.size = require('./functions/misc/size');
exports.sort = require('./functions/misc/sort');

exports.colors = require('./functions/objects/colors');

exports.altCase = require('./functions/string/cases/altCase');
exports.camelCase = require('./functions/string/cases/camelCase');
exports.kebabCase = require('./functions/string/cases/kebabCase');
exports.lowerCase = require('./functions/string/cases/lowerCase');
exports.pascalCase = require('./functions/string/cases/pascalCase');
exports.sentenceCase = require('./functions/string/cases/sentenceCase');
exports.snakeCase = require('./functions/string/cases/snakeCase');
exports.startCase = require('./functions/string/cases/startCase');
exports.switchCase = require('./functions/string/cases/switchCase');
exports.titleCase = require('./functions/string/cases/titleCase');
exports.upperCase = require('./functions/string/cases/upperCase');
exports.escapeHtml = require('./functions/string/html/escapeHtml');
exports.unescapeHtml = require('./functions/string/html/unescapeHtml');
exports.countWords = require('./functions/string/countWords');
exports.palindrome = require('./functions/string/palindrome');
exports.truncate = require('./functions/string/truncate');

exports.base64Decode = require('./functions/transcode/base64Decode');
exports.base64Encode = require('./functions/transcode/base64Encode');
exports.urlDecode = require('./functions/transcode/urlDecode');
exports.urlEncode = require('./functions/transcode/urlEncode');

exports.csvToJson = require('./functions/transformation/csvToJson');
exports.jsonToCsv = require('./functions/transformation/jsonToCsv');
exports.jsonToXml = require('./functions/transformation/jsonToXml');
exports.xmlToJson = require('./functions/transformation/xmlToJson');

exports.validDate = require('./functions/validation/validDate');
exports.validEmail = require('./functions/validation/validEmail');
exports.validIP = require('./functions/validation/validIP');
exports.validRange = require('./functions/validation/validRange');
exports.validTime = require('./functions/validation/validTime');
exports.validURL = require('./functions/validation/validURL');
exports.validUUID = require('./functions/validation/validUUID');

exports.version = '2.0.0';
