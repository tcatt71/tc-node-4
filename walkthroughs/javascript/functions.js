console.log("Script attached");

// Exercise 1
function printOdds(n) {
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
}

function printNumsWithinRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

// Exercise 2

function checkAge(age, name = "my friend") {
  const ageLimit = 16;

  if (age) {
    if (age < ageLimit) {
      console.log(
        `Sorry ${name}, you have to wait ${
          ageLimit - age
        } years until you can drive.`
      );
    } else {
      console.log(
        `Congrats ${name}! You've been able to drive for ${
          age - ageLimit
        } years.`
      );
    }
  } else {
    console.log("No age given.");
  }
}

// FIZZBUZZ EXTREME
function printFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i % 3 == 0 ? "FIZZ" : ""}${i % 5 == 0 ? "BUZZ" : ""}`, i);
  }
}

// FIZZBUZZ With a Function
function fizzBuzz(limit) {
  for (let i = 1; i < limit; i++) {
    let result = `${i} `;
    if (i % 3 == 0) {
      result += "FIZZ";
    }
    if (i % 5 == 0) {
      result += "BUZZ";
    }
    console.log(result);
  }
}

// ternary (conditional) operator
// condition ? value1 : value2
let value = 16;

console.log(value >= 16 ? "Equal to or Above sixteen" : "Under sixteen");
