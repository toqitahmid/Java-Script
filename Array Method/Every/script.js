let num = [4,6,8,10];

function checkEvery(evenNum){
    return evenNum > 2;
}

const evenNumCheck = num.every(checkEvery);
console.log(evenNumCheck);