//Ubahlah syntax ES5 berikut ke dalam ES6

// 1. Let & Const
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if(retirement > 0){
    console.log(`Hallo nama saya${firstName} umur saya ${retirement} tahun`);
  } else {
    console.log(`Hallo nama saya${firstName} sudah pensiun.`);
  }
}
yearUntilRetirement({ year: 1987, firstName: "John"});

// 2. String Literal 
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Arrow Function
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4. Default Parameter
const makeAjaxRequest = (url, method = "GET") => {
      console.log(url, method);
    }
    
    makeAjaxRequest(`www.google.com`);