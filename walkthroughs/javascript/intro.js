console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Ben";
let lastName = "Bryant";
var age = 24;
let isAlive = true;
let middleName = null;
let noMiddleName; // undefined

// Exercise 2
// Concatenation
const fullName = firstName + lastName; // "Ben Bryant"
// Interpolation
let templateFullName = `${firstName} ${lastName}`; // "Ben Bryant"

console.log(
  `TEST ${
    fullName === templateFullName
  }: fullName is the same as templateFullName`
);

// Exercise 3
let city = "Birmingham";
let state = "Alabama";
let pastTime = "running";
let myStory =
  "Hello! My name is " +
  fullName +
  ". I live in " +
  city +
  ", " +
  state +
  ". I enjoy " +
  pastTime +
  ".";
let templateMyStory = `Hello! My name is ${fullName}. I live in ${city}, ${state}. I enjoy ${pastTime}.`;

console.log(
  templateMyStory,
  `TEST ${myStory === templateMyStory}: myStory is the same as templateMyStory`
);
