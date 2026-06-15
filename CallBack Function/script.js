function display(sum){
    console.log(sum);
}

function calculator(num1, num2, callback){
    
    let sum = num1 + num2;
    if(callback){
        display(sum);
    }
}

calculator(5, 5, display)