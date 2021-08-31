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

function bookInfo() {
  console.log(
    `${this.title} by ${this.author} is ${this.pages} pages and has been read ${this.readCount} time(s).`
  );
}

// Exercise 2
const book = {
  author: "Patrick Rothfuss",
  title: "Name of the Wind",
  pages: 721,
  readCount: 3,
  printInfo: bookInfo,
};

const book2 = book;

// Value vs Reference Types
// Primitive vs Non-primitive

let x = 1;
let y = x;

x = 2;

console.log(y);

book.readCount++;

console.log(book2);
