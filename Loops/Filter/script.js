let numbers = [10, 20, 30, 40, 50];

let evenNum = numbers.filter(num => (
  num % 4 === 0
))

console.log(evenNum);
console.log(Array.isArray(evenNum));
