let num1 = [10, 20, 50];
let num2 = [30, 40];

let num = [...num1, ...num2];
// console.log(num);

let obj1 = {
    id: 110,
    name: 'Araf',
}


const obj = {
    ...obj1,
    address: {
        thana: "Brigonj",
        zila: "Dinapur",
    }
 };
console.log(obj);