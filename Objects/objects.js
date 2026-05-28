// singlaton
// Object.create

// Object literals

const JsUser = {
    name : "Araf",
    age : 20,
    location : "Dhaka",
    userEmail : "araf@gmail.com",
    IsloggedIn : false,
    lastlogInDays : ["Sunday", "Monday"]
}

console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser["IsLoggedIn"]);
// console.log(JsUser.IsLoggedIn);
console.log(JsUser["lastlogInDays"]);

// Object.freeze(JsUser);
// JsUser.name = "Toqi";
// console.log(JsUser.name);


JsUser.greeting = function(){

    return "Hello Js";
    
}

// JsUser.greeting();
console.log(JsUser.greeting());

