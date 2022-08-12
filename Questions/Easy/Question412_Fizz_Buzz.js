/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {

    for(let i = 1; i <= n; i++){
        let test = '';

        if (i % 3 === 0) {
            test += 'Fizz';
        }
        if (i % 5 === 0) {
            test += 'Buzz';
        }
    }
    
};