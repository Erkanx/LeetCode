const stringArr = ["Joe", "Kapil", "Steve", "Musk"]
stringArr.sort();
// Output
(4) ["Joe", "Kapil", "Musk", "Steve"]

stringArr.reverse();
// Output
(4) ["Steve", "Musk", "Kapil", "Joe"]

//### Sort Number Array in javascript
const array  = [40, 100, 1, 5, 25, 10];
array.sort((a,b) => a-b);
// Output, least to greatest
(6) [1, 5, 10, 25, 40, 100]

array.sort((a,b) => b-a);
// Output, greatest to least
(6) [100, 40, 25, 10, 5, 1]