export async function convertUSDToEUR(amount) {  
    const rate = await fetchExchangeRate(); // Assume this calls an API  
    return amount * rate; 
  }

export async function fetchExchangeRate(){
    return 1;
}

// async function convert(base, destination){
//   try {
//     const result = await fetch(
//       `https://api.exchangeratesapi.io/latest?base=${base}`
//     );
//     const data = await result.json();
//     return data.rates[destination];
//   } catch (e) {
//     return null;
//   }
// }
// export {convert}