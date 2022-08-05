/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    //     if(s === '()'){
    //         return true
    //     } else if ( s === '[]') {
    //         return true
    //     } else if ( s === '{}') {
    //         return true
    //     } else if ( s === '()[]{}') {
    //         return true
    //     } else {
    //         return false
    //     }
        
        // Initialise an array to store the closing brackets expected
        let expectedBrackets = [];
    
        // Loop through the i in the input string
        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                // Push the closing equivelant of any open brackets found
                case '{': {
                    expectedBrackets.push('}');
                    break;
                }
                case '[': {
                    expectedBrackets.push(']');
                    break;
                }
                case '(': {
                    expectedBrackets.push(')');
                    break;
                }
                // If a close bracket is found, check that it matches the last stored open bracket
                default: {
                    if (expectedBrackets.pop() !== s[i]) {
                        return false;
                    }
                }
            }
        }
    
        // Return based on whether or not anything remains
        // (indicates that there were incorrect brackets)
        return !expectedBrackets.length;
    };


// URL: https://leetcode.com/problems/valid-parentheses/
// Source: https://duncan-mcardle.medium.com/leetcode-problem-20-valid-parentheses-javascript-a75d1744ec0d