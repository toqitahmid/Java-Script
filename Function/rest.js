let sum = 0;
function operation(...numbers) {
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(operation(10, 20, 30, 40, 50));