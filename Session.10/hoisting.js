// https://www.youtube.com/watch?v=EvfRXyKa_GI&ab_channel=WebDevSimplified


console.log(hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted!";
// What it returns? Undefined because we have the incialization of "var" in our scope.
// What  hoisting does to var? Returns undefined because var is pushed to top of the code and inicialized but instead of giving the value,
// it only inicialize with "undefined". Hoisted but no other value than "undefined" declared.
// What can we do to make it work? Declare the variable before we call it.

// CHALLENGE //

// If using let or const it will return "Cannot access 'hoistedVar' before initialization" because of not being hoisted.
// the variable will not be automatically moved so can't even be inicialized. 

notHoistedFunc(); // Error: notHoistedFunc is not a function
const notHoistedFunc = () => console.log("I won't work");
// What it returns? Error: notHoistedFunc is not a function, because let and const are not hoisting. 
// What hoisting does to arrow function? Arrow functions are not hoisted like a basic function() would do. or async function or func*.
// What can we do to make it work? Declare the const arrow function before we try to incialize the function.

// CHALLENGE //

// Even if we swap for let or const, it still an arrow function. So hoisting is not happening, so the arrow function
// will stay where it is, and won't be inicialized. If we pushed var, it would return undefined as var do when hoisting.

hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}
// What it returns? The expected result. Because function() are hoisted, like vars. 
// But the despite the var giving back a value of undefined, functions run well, as they all get pushed to the top of our code.
// Resuming: Function() | Func* | Async Function() and var are hoisted so they get pushed to the top of our code. 
// Var always returns undefined unless they are declared before readen.
// let and const are not hoisted so they will never get pushed to the top of our code.

