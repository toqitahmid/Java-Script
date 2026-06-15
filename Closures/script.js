function temporary(){

    let count = 0;

    return function (){
        count+=1;
        return count;
    }
}

let add = temporary();

console.log(add());
console.log(add());
console.log(add());