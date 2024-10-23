// Rest Parameter & Spread Operator
// 1. Rest Parameter
// Tanpa Rest Parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};
func1("A", "B", "C", "D", "E");

// Dengan Rest Parameter
const func2 = (...params) => {
    console.log(params);
};
func2("A", "B", "C", "D", "E");

// Rest Parameter harus berada di terakhir dalam Parameter
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
    console.log(params[1]);
};
func3("A", "B", "C", "D", "E");

// Mini Exercise
const penjumlahan = (...arr) => {
    let arr = [a, b, c, d, e];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

// Array
// 1. Duplikasi Array
let number2 = [...numbers];
numbers.push(6);
console.log(number2);

// 2. Menggabungkan Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let numbers3 = array1.concat(array2, array3); //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6

// Object
// 1. Duplikasi Object
const john = {
    fullName: "John Doe",
    age: 30,
};
const john2 = {...john, address: "Manado"};

// 2. Menggabungkan Object
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combinedObj = {...obj1, ...obj2};