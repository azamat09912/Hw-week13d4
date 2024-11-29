let numbers = [5, 4, 1, 2, 3];

let san = numbers.map(num => Math.pow(num, 3));
console.log("Кубталған сандар:", san);


let sandar = [];
for (let num of san) {
    if (num % 2 !== 0) {
        sandar.push(num);
    }
}
console.log("Кубталған тақ сандар:", sandar);

let student = +prompt("Студенттер санын енгізіңіз:");
let baga = [];

for (let i = 0; i < student; i++) {
    let baga2 = +prompt((i + 1) + "-ші студенттің бағасын енгізіңіз:");
    baga.push(baga2);
}


let totalbaga = baga.reduce((sum, baga2) => sum + baga2, 0);


let averagebaga2 = totalbaga / student;
console.log("Ортақ баға:", averagebaga2);


let highbaga = baga.filter(baga2 => baga2 > 85);
console.log("85-тен жоғары бағалар:", highbaga);