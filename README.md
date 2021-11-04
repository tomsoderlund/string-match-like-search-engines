# string-match-like-search-engines

Google/Bing search style string matching.

## Install

    yarn add string-match-like-search-engines

## Use

    import stringMatch from 'string-match-like-search-engines'

    // stringMatch(stringToCheck, pattern, options)
    stringMatch('A good day for hot dogs and smoothies', 'hot dogs') // returns true
    stringMatch('A good day for hot dogs and smoothies', 'dog hot') // returns true
    stringMatch('A good day for hot dogs and smoothies', 'hot cats') // returns false
    stringMatch('A good day for hot dogs and smoothies', '"hot dogs" smoothies -burgers -"cold beer"') // returns true

Notes:

- If `pattern` is not a string, `stringMatch` just return truthiness of `pattern`.

## Options

    defaultOptions = {
      stringDelimiter: '"',
      caseSensitive: false
    }

## Run tests

    yarn test
