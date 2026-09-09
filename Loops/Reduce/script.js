let numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((sum, num) => {
    return sum += num;
})
console.log(total );