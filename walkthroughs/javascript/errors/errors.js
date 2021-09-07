"use strict";

// Reference errors

// console.log(ben.lname);

// Syntax errors
// let 12 = 12;

// Type errors
let ben = "Ben"; // primitive string
// new String("Ben").length
ben.sort; // undefined

class InvalidNumber extends TypeError {
  constructor(message) {
    super(message);
    this.name = "InvalidNumber";
    this.date = new Date();
  }
}

console.log(this);

const someFunc = () => {
  console.log(this, "from arrow function");
};

const wilem = {
  speak: someFunc,
  times: times,
};

wilem.speak();
console.log(wilem.times());

function times(num, num2) {
  console.log(this, "from function declaration");
  try {
    if (typeof num2 != "number" || typeof num != "number") {
      throw new InvalidNumber("Value was not a number");
    } else {
      console.log("Won't always run");
      return num2 * num;
    }
  } catch (error) {
    // handle the error
    console.error(error);
    if (error instanceof InvalidNumber) {
      return "One or more arguments were not numbers";
    } else {
      return "Unknown error";
    }
  } finally {
    console.log("Will always run");
  }
}
