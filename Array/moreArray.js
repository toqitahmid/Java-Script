
const newArray = [1,2,3];
const newerArray = [4,5,6];

// newArray.push(newerArray); 
// console.log(newArray);
// console.log(newArray[3][1]);

const allArray = newArray.concat(newerArray);
console.log(allArray);
console.log(...newArray,...newerArray)

