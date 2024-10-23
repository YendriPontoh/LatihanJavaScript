// Array in JavaScript
// Deklarasi Array
// Cara 1. Array Literal
//let numbers = [1, 2, 3, 4, 5];
//console.log(numbers);

// Cara 2. Kata Kunci New
//let numbers2 = new Array(6, 7, 8, 9, 10);
//console.log(numbers2);

// Tipe data yang bisa disimpan dalam Array
//let numbers = [1, 2, 3, 4, 5]; //numbers
//let students = ["John", "Jane", "Bob"] //string
//let john = ["John", 30, true, [80, 90, 100]]; //mixed
//console.log(john);

// Array Length
//console.log(numbers.length); //5
//console.log(students.length); //4
//console.log(john.length); //3

// Cara mengakses element/data tertentu dalam Array melalui index array. Index selalu dimulai dari 0
//console.log(numbers[2]); //3
//console.log(students[1]); //Jane
//console.log(john[2]); //true
//console.log(john[3] [1]); //90

// Mengakses element/data terakhir dalam Array
//let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numbers2[numbers2.length - 1]);

// Array Method
//let array = [1, 2, 3, "Hello", false, true];
//console.log(array);

// 1. toString()
//console.log(arrat.toString());

// 2. join()
//console.log(array.join());
//console.log(array.join(" "));
//console.log(array.join("-"));
//console.log(array.join("#"));

// 3. pop()
//array.pop();
//console.log(array);

// 4. push()
//array.push("Selamat Pagi");
//console.log(array);

// 5. shift();
//array.shift();
//console.log(array);

// 6. unshift()
//array.unshift("Selamat Pagi");
//console.log(array);

// 7. splice()
//array.splice(2, 1); //hapus
//console.log(array);
//array.splice(1, 1, 1); //ganti
//console.log(array);
//array.splice(2, 0, 2, 3); //tambah
//console.log(array);

// 8. concat()
//let buah = ["pisang", "apel", "jeruk"];
//let sayur = ["tomat", "bayam", "wortel"];
//let biji = ["kedelai", "kacang tanah", "kacang polong"];
//let makanan = buah.concat(sayur, biji);
//console.log(makanan);

// 9. slice()
//let sayuran = makanan.slice(3, 6);
//console.log(sayuran);
//let bijian = makanan.slice(6);
//console.log(bijian);