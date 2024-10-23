// JavaScript Object & Conditional

// Deklarasi Object
// Object Literal
let john = {
    firstName: "John",
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function () { //object method
        console.log("Hello My Name Is" + this.firstName); //object method
    },
    address: {
        street: "Jl. Arnold Mononutu Airmadidi",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalcode: 95371,
    },
};
console.log(john);

// Mengakses properti dalam object
// 1. Dot Notation
console.log(john.firstName); //john
console.log(john.age); //30
john.age = 31; //ubah nilai
console.log(john);
john.job = "Teacher"; //tambah properti baru
console.log(john);

// 2. Bracket Notation
console.log(john["isMarried"]);
john["nationality"] = "Indonesia"; //tambah properti baru
console.log(john);

// Object Method
john.sayGreetings();

// Object Inside Object
console.log(john.address.city);

// Delete Property dalam Project
delete john.grade;
console.log(john);

// JavaScript Conditional
// 1. if - else
// Jika suhu hari ini lebih dari atau sama dengan 37, Tampilkan suhu hari ini panas, Jika tidak tampilkan suhu hari ini dingin
let temp = 35;
if (temp >= 37) {
    console.log("Suhu hari ini panas");
} else {
    console.log("Suhu hari ini dingin");
}

// 2. if - else  if - else
// Jika nilai 100 - 80 tampilkan grade A. Jika nilai 70 - 79 tampilkan grade B. Jika nilai 50 -69 tampilkan grade C. Jika nilai dibawah 50 tampilkan grade D
let grade = 100;
if (grade >=80 && grade <= 100) {
    console.log("Grade A");
} else if (grade >= 70 && grade <= 80) {
    console.log("Grade B");
} else if (grade >= 50 && grade <= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// 3. Switch - case
// Jika angka 1 tampilkan Januari. Jika angka 2 tampilkan Februari. Jika angka 3 tampilkan Maret : Jika angka 12 tampilkan Desember
let number = 1;
switch(number) {
    case 1:
        console.log("Januari")
        break;
    case 2:
        console.log("Februari")
        break;
    case 3:
        console.log("Maret")
        break;
    default:
        console.log("Not Found")
        break;
}