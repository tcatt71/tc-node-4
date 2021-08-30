// Exercise 1
const numbers = [2, 22, 12, 17, 18, 39, 129];
const people = [
  {
    fname: "Ben",
    lname: "Bryant",
  },
  {
    fname: "Frodo",
    lname: "Baggins",
  },
  {
    fname: "Gandalf",
    lname: "the Gray",
  },
];

// Initialize = declaring and assigning let sum = 0;

function arraySum(numbers) {
  let sum = 0;

  numbers.forEach(function (value) {
    sum += value;
  });

  return sum;
}

console.log(arraySum(numbers)); // 239

let longestName = people.reduce(function (name, person) {
  if (name.length < person.fname.length) {
    return person.fname;
  } else {
    return name;
  }
}, "");

console.log(longestName); // Gandalf

// Exercise 2

let x = [7];
let y = x; // x is [7]

x[1] = 9;

console.log(y);
