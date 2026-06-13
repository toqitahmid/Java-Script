let num = [1, 2, 3, 4, 5];

function filtering(value) {
  return value > 2;
}

let filteringValue = num.filter(filtering);
console.log(filteringValue);
