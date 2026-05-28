
function myFirstJs(){

    console.log("Alhumdulillah");
    
}

myFirstJs() 

function addNumbers(number1, number2){

    // console.log(number1+number2);
    return number1+number2;
    
}

// console.log(addNumbers(2,3));

const addfunc = addNumbers(2,3);
console.log(addfunc);


function checkLog(id){

    if(id === "araf"){
        console.log(`${id} logged in`);
        return;
    }
    return `Sorry ${id} user!`
}

const logCheck = checkLog();
console.log(logCheck);
