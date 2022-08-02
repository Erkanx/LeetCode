/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    let word = 'USA';
    
    let capitalCount = 0;


    for (let i = 0; i < word.length; i++) {
        const wordLength = word[i];

        if (wordLength === wordLength.toUpperCase()) {
            capitalCount += 1;
        }
    }

    return (capitalCount === word.length || capitalCount === 0 || (word[0] === word[0].toUpperCase() && capitalCount === 1 ));

};


//URL: https://leetcode.com/problems/detect-capital/
//Source: https://www.youtube.com/watch?v=ewY8hyzvEA4