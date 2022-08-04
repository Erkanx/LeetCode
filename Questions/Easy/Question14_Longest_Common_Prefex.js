    /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

      // if array is empty, return a prefix of empty string
      if (strs.length === 0) {
        return ""
      }

      // if array has 1 word, return the whole word
      if (strs.length === 1) {
        return strs[0]
        }

      
      // set a variable prefix equal to empty string
      let prefix = ""    
      // iterate through the letters of the first word
      for (let i = 0; i < strs[0].length; i++) {    
          // compare those letters to same Index-ed letter of other words
          for (let j = 1; j < strs.length; j++) {        
          // if the letters match, continue to next set of letters;             
          // but if the letters don't match, return prefix
          // for the inside for loop (currently an empty string)
              if (strs[j][i] === strs[0][i]) {
                  continue
              } else {
                  return prefix
              }
          }   
        // After inside for loop completes OR Breaks because the letters 
        // no longer match, the index in the first word will mark where 
        // the longest common prefix is, so we add to our empty string
          prefix += strs[0][i]
      }
      
      return prefix  
};