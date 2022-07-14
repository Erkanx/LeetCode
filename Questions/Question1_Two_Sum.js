/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    const store = {}
    for(let i = 0; i < nums.length; i++){
      let cur = nums[i]
      let diff = target - cur
      
      // Return answer if the current number was a diff from a previous number
      if(store[cur]!==undefined){
       return [store[cur], i]   
      } else {
      // Set diff to current index in store
        store[diff] = i  
      }
    }
};

// URL: https://leetcode.com/problems/two-sum/
// Source: https://dev.to/cod3pineapple/leetcode-1-two-sum-javascript-solution-n5g