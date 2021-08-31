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

function useContacts(list, action) {
    for (let value of list) {
        action(value.age, value.name);
    }
}

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

let friendsList = friends.map((friend) => ({
    name: friend.name.toUpperCase(),
    age: calcAgeInSeconds(friend.age),
}));

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

console.log(friends);
console.log(friendsList);

// Exercise 1
// Function Declaration

function plus(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

// Arrow Notation Function

const plus1 = (num1) => {
    return (num2) => num1 + num2;
};

let plus30 = plus(30);

console.log(plus30(50)); // returns 30 + 50

let person = {
    name: "Ben",
    greet: () => {
        console.log("Hello!");
    },
    greet3rdPerson: function () {
        console.log(this.name + " says hello");
    },
};

person.greet();
person.greet3rdPerson();
