 function factorial(n) {  
  if (n === 0) return 1; // Base case  
  return n * factorial(n - 1);
  
}  
console.log(factorial(5)); // 120  

const memo = new Map();  
function fib(n) {  
  if (n <= 1) return n;  
  if (memo.has(n)) return memo.get(n);  
  const result = fib(n - 1) + fib(n - 2);  
  memo.set(n, result);  
  return result;  
}  
console.log(fib(10)); // 55 (avoids redundant calculations)  ~



function traverse(obj, path = []) {  
    if (typeof obj !== 'object') {  
      console.log(path.join('/'), '->', obj);  
      return;  
    }  
    for (const key in obj) {  
      traverse(obj[key], [...path, key]);  
    }  
  }  
  
  const nested = {  
    a: 1,  
    b: { c: 2, d: { e: 3 } },  
    f: [4, 5]  
  }; 
  traverse(nested);