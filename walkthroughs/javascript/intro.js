// [declaration keyword] [identifier] = [value]

// Declaration Keywords
var y; // declare a variable that is function (local) scoped. can be reassigned
let x; // declare a variable that is block (local) scoped. can be reassigned
const months = 12; // declare a variable that is block (local) scoped. cannot be reassigned

// Data Types
let notDefined; // undefined
let empty = null; // null
let year = 2021; // number
let name = "Ben"; // string
let largeNumber = 12345678901234567890n; // BigInt
let yesOrNo = true; // boolean
("unique"); // only a symbol in the context of structured data

("this is a string");
("string with single quotes");
`template literal string`;
let someString = "this is a string assigned to a variable";

let firstName = "Ben"; // string
let lastName = "Bryant"; // string

// Concatenation, combining two or more strings with '+'
let fullName = "My name is " + firstName + " " + lastName + "."; // My name is Ben Bryant.
// Interpolation
let templateFullName = `My name is ${firstName} ${lastName}.`; // My name is Ben Bryant.

console.log(templateFullName);