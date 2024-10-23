// String Literals, Arrow Function, Default Parameter
// 1. String Literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";
// Hallo nama saya adalah John Doe, umur saya 33 tahun dan saya tinggal di Manado
let kalimat =
    "Hallo nama saya" +
    fullName +
    ", umur saya" +
    age +
    "tahun dan saya tinggal di" +
    address;
console.log(kalimat);

let kalimat2 = `Hallo nama saya ${fullName}, umur saya ${age}, saya tinggal di ${address}`;
console.log(kalimat2);

// 2. Arrow Function
function sayGreetings1(fullName) {
    return `Hallo nama saya ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = (fullName) => `Hallo nama saya ${fullName}`;
console.log(sayGreetings2("John Doe"));

// Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

// Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2)

// 3. Default Parameter
const sayGreetings3 = (fullName) => {
    if (!fullName) {
        fullName = "John Doe";
    }
    if (!age) {
        age = 30;
    }
    if (!address) {
        address = "Manado";
    }
    console.log(`Hallo nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`);
};
sayGreetings3("Stenly", 35);

const sayGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") {
    console.log(
        `Hallo nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`
    );
};
sayGreetings4();