/**
 * stringMatch module
 * @description Google/Bing search style string matching.
 * @module stringMatch
 * @author Tom Söderlund

Example:
  stringMatch('A good day for hot dogs and smoothies', '"hot dogs" smoothies -burgers -"cold beer"')

 */

const defaultOptions = {
  stringDelimiter: '"',
  caseSensitive: false
}

module.exports = (stringToCheck, pattern, options) => {
  if (typeof pattern !== 'string') return !!pattern
  const newOptions = Object.assign({}, defaultOptions, options)
  const { stringDelimiter, caseSensitive } = newOptions
  // Parse the pattern
  let patternArray = []; let phrase = ''; let stringOpen = false; let exclude = false
  for (let i = 0; i < pattern.length; i++) {
    switch (pattern[i]) {
      case stringDelimiter:
        stringOpen = !stringOpen
        break
      case '-':
        exclude = true
        break
      case ' ':
        if (!stringOpen) {
          patternArray.push({ phrase, exclude })
          phrase = ''
          stringOpen = false
          exclude = false
        } else {
          phrase += pattern[i]
        }
        break
      default:
        phrase += pattern[i]
        break
    }
  }
  if (phrase !== '') patternArray.push({ phrase, exclude })
  // Check if the string matches all patterns
  const stringToCheckFixed = caseSensitive ? stringToCheck : stringToCheck.toLowerCase()
  for (let p in patternArray) {
    const doesInclude = stringToCheckFixed.includes(patternArray[p].phrase)
    const patternOk = patternArray[p].exclude ? !doesInclude : doesInclude
    if (!patternOk) return false
  }
  return true
}
