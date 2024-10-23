// 1. Let dan Const Menggunakan Object Destructuring
const yearUntilRetirement = ({year, firstName}) => {
    const age= calculateAge(year);
    const retirement = 60 - age ;

    if (retirement > 0) {
        console.log(`Hallo nama saya ${firstName}, umur saya ${retirement} tahun`);
    } else {
        console.log(`Hallo nama saya ${firstName}, sudah pensiun.`);
    }
}
yearUntilRetirement({year: 1987, firstName: "John"});

// 2. Arrow Function Menggunakan Object Destructuring
const phi = 3.14;
const calculateArea = ({radius, power = 2}) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({radius});

radius = 7;
const area7 = calculateArea({radius});
console.log(`Area dengan radius: ${area21}, dan area dengan radius 7: ${area7}`);

// 3. Default Parameter Menggunakan Default Value
const makeAjaxRequest = (url, method = "GET") => {
    console.log(url, method);
}
makeAjaxRequest(`www.google.com`);

// 4. String Literal Menggunakan Rest Operator
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));