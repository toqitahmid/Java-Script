let numbers = [10, 20, 30, 40, 50];

let showNum = numbers.map(num => {
    if (num % 10 === 0) {
        console.log(num)
    }
})

console.log(Array.isArray(showNum));