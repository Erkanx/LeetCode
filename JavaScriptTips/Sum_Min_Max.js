const array  = [5,4,7,8,9,2]; 
//Sum in array javascript
array.reduce((a,b) => a+b);

// Output: 35
//MAX in array javascript
array.reduce((a,b) => a>b?a:b);
// Output: 9

//MIN in array javascript
array.reduce((a,b) => a<b?a:b);
// Output: 2