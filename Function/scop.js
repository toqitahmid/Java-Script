let a = 10;
let b = 20;

function fun(){
    let a = 30;
    console.log("Inner fun a : " + a);
}
fun();
console.log("outter fun a : " + a);


function user(){

    username = "araf";
    function secondUser(){
        website = "youtube.com"
        console.log(username);
    }
    secondUser();
}

user();

const def = function(){
    console.log("Hi");
}
def();