/* 
Create a variable that contains your name as a value. Name the variable appropriately.
Create a constant that contains the number of states in the U.S. and name it appropriately.
Create a variable that contains a boolean value and name it appropriately.
*/

let name = "Ben";
const numOfStates = 50;
var isRaining = true;

/*
Compute the result of adding 5 and 4 and store it in an appropriately named variable.
Compute the result of comparing 5 being greater than 4 and store it in an appropriately named variable.
Compute the result of multiplying 231 and 4 and store it in an appropriately named variable.
*/

let sum = 5 + 4;
let comparison = 5 > 4;
let product = 231 * 4;

// Single line comment

/*
Multi
line
comment
*/

/*
Write a function called sayHello that displays an alert that says Hello World!
Call the sayHello function.
Write a function called checkAge that takes two arguments: one for a name and one for an age.
If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"
Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
*/

function grantEntry(age, name) {
    alert(
        checkAge(age)
            ? `Enter ${name}`
            : `Sorry ${name}, you can't visit this site.`
    );
}

function checkAge(age) {
    if (age < 21) {
        return false;
    } else return true;
}

// grantEntry(21, "Charles");
// grantEntry(27, "Abby");
// grantEntry(17, "John");
// grantEntry(18, "James");

/*
Create an array of your favorite vegetables and name it accordingly.
Use a loop to print each of your favorite vegetables to the developer console.
Create an array of 5 objects that contain name and age properties.
Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments (parameters).
Create a function called getLength that takes any word as an argument (parameter).
The function should return the number of characters in the string.
Call the getLength function, passing 'Hello World' as the argument (parameter).
Store the returned result of that function in a variable. If the number is even, display 
'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
*/

let veggies = ["tomatoes", "po-ta-toes", "celery"];

veggies.forEach(function (value) {
    console.log(value);
});

let friends = [
    {
        name: "Kvothe",
        age: 17,
    },
    {
        name: "Simmon",
        age: 30,
    },
    {
        name: "Wilem",
        age: 31,
    },
    {
        name: "Kote",
        age: 23,
    },
    {
        name: "Devi",
        age: 18,
    },
];

// friends.forEach(function (person) {
//   grantEntry(person.age, person.name);
// });

function howIsTheWorld(word) {
    if (word.length % 2 == 0) {
        console.log("The world is nice and even.");
    } else {
        console.log("The world is an odd place.");
    }
}

howIsTheWorld("Hello World!");

let person = {
    name: "Devi",
    age: 18,
    hairColor: "blond",
};

// iterate over the values of an iterable object (array)
for (let val of friends) {
    console.log(val);
}

// iterate over the keys of an object
for (let prop in person) {
    console.log(prop);
}

function useContacts(list, action) {
    for (let value of list) {
        action(value.age, value.name);
    }
}

// useContacts(friends, grantEntry);

useContacts(friends, console.log);

function calcAge(unit) {
    return function (age) {
        return age * unit;
    };
}

let calcAgeInYears = calcAge(1);
let calcAgeInWeeks = calcAge(52);
let calcAgeInDays = calcAge(365.25);
let calcAgeInHours = calcAge(365.25 * 24);
let calcAgeInMinutes = calcAge(365.25 * 24 * 60);
let calcAgeInSeconds = calcAge(365.25 * 24 * 60 * 60);

let friendsList = friends.map(function (friend) {
    return {
        name: friend.name.toUpperCase(),
        age: calcAgeInSeconds(friend.age),
    };
});

console.log(friends);
console.log(friendsList);
