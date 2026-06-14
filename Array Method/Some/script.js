let num = [1,2,3,4,5];

function Some(number){
    return number > 3;
}

const findSome = num.some(Some);
console.log(findSome)