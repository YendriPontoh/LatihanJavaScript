// ARRAY EXERCISES
let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people
console.log("Using for Loop");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};

// 2. Using a forEach(),  iterate through this array and console.log all of the people
console.log("Using forEach(): ");
people.forEach(person => {
    console.log(person);
});

// 3. Write the command to remove "Greg" from the array
console.log("Remove 'Greg': ");
people.shift();
console.log(people);

// 4. Write the command to remove "James" from the array
console.log("Remove 'James': ");
people.pop();
console.log(people);

// 5. Write the command to add "Matt" to the front of the array
console.log("Add 'Matt' to the front: ");
people.unshift("Matt");
console.log(people);

// 6. Write the command to add your name to the end of the array
console.log("Add your name: ");
people.push("Nama Anda :");
console.log(people);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
console.log("Using for-loop with break: ");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
};

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt"
console.log("Copy array without 'Mary' anf 'Matt': ");
let copy = people.slice(2, 4);
console.log(copy);

// 9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"]
people = ["Mary", "Devon"];
console.log("Using splice to modify the array: ");
people.splice(2, 1, "Elizabeth", "Artie");
people.unshift("Matt");
people.push("Nama Anda");
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
console.log("Creating withBob array: ");
let withBob = [...people, "Bob"];
console.log(withBob);



// OBJECT EXERCISES
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;
programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);
programming.languages.forEach(language => console.log(language));