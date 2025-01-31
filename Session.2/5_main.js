
const n = 1_000_000; 
for (let i = 0; i < n; i++) { 
  for (let j = i; j < n; j++) { 
   console.log(i + j); 
  }
}

// 2 Nested Loops
// Each time a inner a loop is complete, we move forward on the outer loop
//      with need to go through the inner loop once again.
// Quadratic time complexity
// O(N^2)