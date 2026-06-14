let num = [1,2,3,4,5];

function Find(numbers){
    return numbers > 3;
}

const findFirst = num.find(Find);
console.log(findFirst);