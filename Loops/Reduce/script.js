let nums = [1,2,3];
function reducing (total, value,){
    return total+value;
}
const reducedValue = nums.reduce(reducing);
console.log(reducedValue);