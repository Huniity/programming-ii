console.log("--------------------- || Growth Calculator || ---------------------");
console.log("Hi, let's check your exponential growth of your Twitch channel.");
console.log("We're going to calculate with your given numbers.");

// Step 1: Get user inputs
let month_1_subs = parseInt(prompt("How many subscribers did you have on month 1?"));
let website_subs = parseInt(prompt("How many subscribers do you have this month?"));

console.log("--------------------- || Subs Growth Rate || ---------------------");
let sub_growth_rate = ((website_subs - month_1_subs) / month_1_subs) * 100;
console.log(`${sub_growth_rate.toFixed(2)}% growth rate of subs.`);

let month_1_views = parseInt(prompt("How many views did you have on month 1?"));
let website_views = parseInt(prompt("How many views on your channel do you have this month?"));

console.log("--------------------- || Views Growth Rate || ---------------------");
let view_growth_rate = ((website_views - month_1_views) / month_1_views) * 100;
console.log(`${view_growth_rate.toFixed(2)}% growth rate of views.`);

let growth_month = parseInt(prompt("Ok. Let's see how you see yourself in: (months)"));

// Step 2: Recursive function for growth calculation (for subscribers or views)
function calculateGrowth(initialValue, growthRates, monthIndex) {
    // Base case: no more months to calculate, return the initial value
    if (monthIndex === 0) {
        return initialValue;
    }

    // Recursive case: apply the growth rate for this month
    let growthRate = growthRates[monthIndex - 1];  // Get the growth rate for this month
    return growthRate * calculateGrowth(initialValue, growthRates, monthIndex - 1);
}

// Step 3: Calculate the subscriber and view growth using recursion
let sub_growth_rates = Array(growth_month).fill(1 + sub_growth_rate / 100);  // Convert percentage to growth rate
let view_growth_rates = Array(growth_month).fill(1 + view_growth_rate / 100);  // Same for views

// Step 4: Calculate the future number of subscribers and views
let future_subs = calculateGrowth(month_1_subs, sub_growth_rates, growth_month);
let future_views = calculateGrowth(month_1_views, view_growth_rates, growth_month);

// Step 5: Display the result
console.log(`After ${growth_month} months:`);
console.log(`You will have approximately ${future_subs.toFixed(0)} subscribers.`);
console.log(`You will have approximately ${future_views.toFixed(0)} views.`);
