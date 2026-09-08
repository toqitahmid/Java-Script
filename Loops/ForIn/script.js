let obj = {
    id: 110,
    name: 'Araf',
    address: 'Dhaka',
}

for (let entry in obj) {
    console.log(entry, '->' ,obj[entry]);
}