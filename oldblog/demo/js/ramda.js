let R = require('ramda')
// var res = r.map((a) => {
//    return a
// })
// console.log(res([1,2,3]));

var sumOfArr = arr => {
    var sum = 0;
    arr.forEach(i => sum += i);
    return sum;
};
var lengthOfArr = arr => arr.length;

// var average = R.converge((a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }, [sumOfArr, lengthOfArr, () => 3])
// average([1, 2, 3, 4, 5, 6, 7])



var decreaseOne = x => x - 1;
var increaseOne = x => x + 1;

R.useWith((a,b)=>{
    console.log(a);
    console.log(b);
    
}, [decreaseOne, increaseOne])(3, 4) 