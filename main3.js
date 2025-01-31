console.log("--------------------- || Growth Calculator || ---------------------")
    console.log("Hi, let's check your exponential growth of your Twitch channel.")
    console.log("We're going to calculate with your given numbers.")

    let month_1_subs = prompt("How many subscribers did you had on month 1?")
    let website_subs = prompt("How many subscribers did you had this month?")
console.log("--------------------- || Subs Growth Rate || ---------------------")
    let sub_growth_rate = ((website_subs - month_1_subs) / month_1_subs) * 100;
    console.log(sub_growth_rate+"% growth rate of subs.")
    let month_1_views = prompt("How many views did you had on month 1?")
let website_views = prompt("How many views on your channel did you had this month?")
console.log("--------------------- || Views Growth Rate || ---------------------")
    let view_growth_rate = ((website_views - month_1_views) / month_1_views) * 100;
    console.log(view_growth_rate+"% growth rate of views.")
    let growth_month = prompt("Ok. Let's see how you see yourself in: (months)")

/*
function exponentialGrowth(){

    const growth_rates = [1.5, 3, 6, 12, 24, 48, 96, 192]
    let i= 0;
    
        for(i = 2; i <= number; i++){
            arr[i] = arr[i-1] + arr[i-2]; 
        }

        let growthRate = growthRates[months - 1];  // Get the growth rate for this month
        return growthRate * calculateCustomersVaryingGrowth(months - 1);
    }
    exponentialGrowth();
*/

console.time("fibonacci")
function numFibonacci(number){

const growth_rates = [1.5, 3, 6, 12, 24, 48, 96, 192]
let i= 0;

    for(i = 2; i <= number; i++){
        arr[i] = arr[i-1] + arr[i-2]; 
    }
    console.log(arr[number]);
    console.log(arr);
}
numFibonacci(10);
console.timeEnd("fibonacci")