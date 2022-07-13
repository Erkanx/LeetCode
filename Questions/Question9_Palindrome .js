/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return x === Number(x.toString().split("").reverse().join(""));
  
};

// URL: https://leetcode.com/problems/palindrome-number/solution/