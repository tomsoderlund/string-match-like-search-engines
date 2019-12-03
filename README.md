# string-match-like-search-engines

Google/Bing search style string matching.

## Examples

Simple:

    "hot dogs"

Advanced:

    "hot dogs" -cats mouse -"water guns"

## Install

    yarn add string-match-like-search-engines

## Use

    import stringMatch from 'string-match-like-search-engines'

    // stringMatch(stringToCheck, pattern, options)
    stringMatch('This was a mouse day, not a cats day', '"hot dogs" -cats mouse -"water guns"') // returns true

## Options

    defaultOptions = {
      stringDelimiter: '"',
      caseSensitive: false
    }
