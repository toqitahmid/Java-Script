let student = {
    id: 110,
    name: 'Araf',
    address: {
        thana: 'Birgonj',
        zila: 'Dinajpur',
    }
}

const { id, name, address: { thana, zila } } = student;
// console.log(zila);

let student2 = student;

const {
    id: studentId,
    name: studentName,
    address:
    {
        thana: stdThana,
        zila: stdZila,
    }
} = student2

console.log(stdThana);
