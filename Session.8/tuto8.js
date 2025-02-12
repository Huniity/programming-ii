function createFib() {  
    const memo = new Map();  
    return function fib(n) {  
      if (n <= 1) return n;  
      if (memo.has(n)) return memo.get(n);  
      const result = fib(n - 1) + fib(n - 2);  
      memo.set(n, result);  
      return result;  
    };  
  }  
  const fibMemo = createFib();  
  console.log(fibMemo(50)); // 12586269025 (efficient!) 

  function coinChange(coins, target) {  
    coins.sort((a, b) => b - a); // Sort descending  
    let count = 0;  
    for (const coin of coins) {  
      while (target >= coin) {  
        
        console.log(coin)
        target -= coin;  
        count++;
      }  
    }  
    return target === 0 ? count : -1;  
  }  
  console.log(coinChange([1, 5, 10], 28)); // 10 + 10 + 5 + 1 + 1 + 1 → 6 coins  