// https://www.youtube.com/watch?v=EvfRXyKa_GI&ab_channel=WebDevSimplified


console.log(hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted!"; 
// returns undefined because var is pushed to top of the code and inicialized but instead of giving the value,
// it only inicialize with "undefined". Hoisted but no other value than "undefined" declared.

// CHALLENGE //

// If using let or const it will return "Cannot access 'hoistedVar' before initialization" because of not being hoisted.
// the variable will not be automatically moved so can't even be inicialized.

notHoistedFunc(); // Error: notHoistedFunc is not a function
const notHoistedFunc = () => console.log("I won't work");
// despite being a var, and getting pushed to the top of the code, arrow functions are not hoisted like a basic function() would do.

// CHALLENGE //

// Even if we swap for let or const, it still an arrow function. So hoisting is not happening, so the arrow function
// will stay where it is, and won't be inicialized.

hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}
// function() are hoisted, like vars. But the despite the var giving back a value of undefined, functions run well, as they
// all get pushed to the top of our code.

// Resuming: Function() and var are hoisted so they get pushed to the top of our code. Var always returns undefined unless they are declared before readen.
// let and const are not hoisted so they will never get pushed to the top of our code.

