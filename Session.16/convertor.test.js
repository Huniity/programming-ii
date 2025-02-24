import { convertUSDToEUR, fetchExchangeRate } from "./convertor.js";

describe("Mocking Currency Convertor", () => {

       test('Converts USD to CAD', async () => {
           await expect(fetchExchangeRate()).resolves.toBe(1);
         });
        });


// describe("Mocking Currency Convertor", () => {

//     test('rate expected to be 1', async () => {
//         await expect(fetchExchangeRate()).resolves.toBe(1);
//       });
    
//     const realRate =  convertUSDToEUR.rate;
//     console.log(realRate)
//     const fixedRate = 1.199;
//     console.log(fixedRate)
    
//     beforeAll(()=> {
        
//     });
//     afterAll(()=> {
        
//     });
        
//     test('Test USD to EUR conversion', () => {
//         });
// });

