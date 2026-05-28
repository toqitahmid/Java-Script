
const githubUser = {}

githubUser.username = "toqitahmid"
githubUser.email = "abusamsarafofficial@gmail.com"
githubUser.password = 121

console.log(githubUser.username);
console.log(githubUser.email);
console.log(githubUser.password);

const regularUser = {

    name : "Araf",
    fullname : {
        firstName : "Toqi",
        age : {
            currentAge : 20
        }
    }
}

console.log(regularUser.name);
console.log(regularUser.fullname.age.currentAge);

const obj1 = {a : 1, b : 2}
const obj2 = {c : 3, d : 4}

// obj = {obj1, obj2};
// console.log(obj);

const obj = {...obj1, ...obj2}
console.log(obj);
