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

// stringMatch('A good day for hot dogs and smoothies', 'hot dogs')
module.exports = function stringMatch (stringToCheck, pattern, options) {
  if (typeof pattern !== 'string') return !!pattern
  const newOptions = Object.assign({}, defaultOptions, options)
  const { stringDelimiter, caseSensitive } = newOptions
  const patternArray = []
  let phrase = ''
  let stringOpen = false
  let exclude = false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    // Check for string delimiter
    if (char === stringDelimiter) {
      if (stringOpen) {
        // End of quoted string
        patternArray.push({ phrase, exclude })
        phrase = ''
        stringOpen = false
        exclude = false
      } else {
        // Start of quoted string
        stringOpen = true
        // Check for exclude flag right before the opening quote
        if (i > 0 && pattern[i - 1] === '-') {
          exclude = true
        }
      }
      continue
    }

    // Check for space outside of quoted string
    if (char === ' ' && !stringOpen) {
      if (phrase !== '') {
        patternArray.push({ phrase, exclude })
        phrase = ''
        exclude = false
      }
      continue
    }

    // Check for exclude flag outside of quoted string
    if (char === '-' && !stringOpen && phrase === '') {
      exclude = true
      continue
    }

    // Append character to phrase
    phrase += char
  }

  // Push the last phrase if not empty
  if (phrase !== '') patternArray.push({ phrase, exclude })

  // Check if the string matches all patterns
  const stringToCheckFixed = caseSensitive ? stringToCheck : stringToCheck.toLowerCase()
  for (const patternObject of patternArray) {
    const phraseFixed = caseSensitive ? patternObject.phrase : patternObject.phrase.toLowerCase()
    const doesInclude = stringToCheckFixed.includes(phraseFixed)
    const patternOk = patternObject.exclude ? !doesInclude : doesInclude
    if (!patternOk) return false
  }
  return true
}
