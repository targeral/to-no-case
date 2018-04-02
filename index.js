'use strict';

const hasSpace = /\s/
const hasSeparator = /(_|-|\.|:)/
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

const toNoCase = string => {
     if (hasSpace.test(string)) return string.toLowerCase()
     if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
     if (hasCamel.test(string)) return uncamelize(string).toLowerCase()

     return string.toLowerCase()
 }

 /**
 * Separator splitter.
 */

const separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 * 开头至少匹配一个非字母、数字、汉字的字符，接着匹配任意一个除换行以外的任意字符或者直接是结尾。
 *
 * @param {String} string
 * @return {String}
 */

const unseparate = string => string.replace(separatorSplitter, (m, next) => next ? ' ' + next : '')

/**
 * Camelcase splitter.
 */

const camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

const uncamelize = string => string.replace(camelSplitter, (m, previous, uppers) => previous + ' ' + uppers.toLowerCase().split('').join(' '))

module.exports = toNoCase
