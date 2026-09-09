let products = [
    {
        id: 110,
        productName: 'Face wash',
        price: 100
    },
    {
        id: 210,
        productName: 'Body sprey',
        price: 200,
    },
    {
        id: 310,
        productName: 'T-shirt',
        price: 350,
    },
    {
        id: 410,
        productName: 'Jins',
        price: 550,
    },
    {
        id: 510,
        productName: 'Jins',
        price: null,
    },
]

const estPrice = products.
    filter(product => typeof product.price === 'number').
    reduce((total, cur) => {return total += cur.price},0)

console.log(estPrice);