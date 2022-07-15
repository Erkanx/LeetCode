/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    a = cost[0]
    b = cost[1]
    
    for (let i = 2; i < cost.length; i++) {
        if (i % 2 === 0) {
            a = Math.min(a, b) + cost[i]
        } else {
            b = Math.min(a, b) + cost[i]
        }
    }
    
    return Math.min(a, b)

};

// URL: https://leetcode.com/problems/min-cost-climbing-stairs/
// Source: https://ivyhungtw.medium.com/leetcode-746-min-cost-climbing-stairs-easy-javascript-dynamic-programming-solution-9e7baf4cf8c6