let numbers = [20,50,10,30,60,40,100,70,90,80]; 

// assending sort:
numbers.sort(function(a,b){
    return a - b;
})
console.log(numbers);

//dessending sort:
numbers.sort(function(a,b){
    return b - a;
})
console.log(numbers);

console.log(Math.max.apply(null,numbers))