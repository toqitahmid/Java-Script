let user = [
    {
        id: 110,
        name: 'Araf',
    },
    {
        id: 220,
        name: 'Toqi',
        address: {
            area: ['Keotgoan', 'Bahadurhat'],
            District: 'Dinajpur',
            city: 'Rangpur'
        }
    },
    {
        id: 330,
        name: 'Tahmid',
    }

]

console.log(user[1].address.area);
console.log(Object.entries(user[1]));