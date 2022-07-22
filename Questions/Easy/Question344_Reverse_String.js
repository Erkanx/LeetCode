/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
      let hold = s[left];
      s[left] = s[right];
      s[right] = hold;
      left++
      right--
    }
};

//URL: https://leetcode.com/problems/reverse-string/
//Source: https://www.youtube.com/watch?time_continue=9&v=lMa36OOKy7Y&feature=emb_title