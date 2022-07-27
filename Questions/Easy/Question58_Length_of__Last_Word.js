/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let sArray = s.trim().split(' ');
    if(sArray.length === 0) {
      return 0;
     } else {
      return sArray[sArray.length - 1].length;
    }
};

// URL: https://leetcode.com/problems/length-of-last-word/
// Source: https://imanuelgittens.gitbooks.io/a-javascript-journey-through-leetcode/content/question-five.html