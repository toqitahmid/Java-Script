
function numbers(...number){

    return number;
}

const findNum = numbers([1,2,3]);
console.log(findNum);


const users = {
    name : "araf",
    id : 123,
    email: "abusamsarafofficial@gmail.com"
}

function getuser(user){

    console.log(`${user.name} is a user name & ${user.email} is his/her email`);
    
}
getuser(users);