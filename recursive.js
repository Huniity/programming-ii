console.log(``)
console.log(``)
console.log("---------------------- || Growth Calculator || ----------------------")
    console.log("Hi, let's check your exponential growth of your Twitch channel.")
    console.log("We're going to calculate with your given numbers.")

console.log(``)
console.log("---------------------------------------------------------------------")
    let month_1_subs = prompt("How many subscribers did you had on month 1?")
    let actual_subs = prompt("How many subscribers did you had this month?")

console.log(``)
console.log("---------------------- || Subs Growth Rate || ----------------------")
    let sub_growth_rate = parseFloat((((actual_subs - month_1_subs) / month_1_subs) * 100).toFixed(2));
    console.log(sub_growth_rate+"% growth rate of subs.")

console.log(``)
console.log("---------------------------------------------------------------------")
    let month_1_views = prompt("How many views did you had on month 1?")
    let actual_views = prompt("How many views on your channel did you had this month?")

console.log(``)
console.log("---------------------- || Views Growth Rate || ----------------------")
    let view_growth_rate = parseFloat((((actual_views - month_1_views) / month_1_views) * 100).toFixed(2));
    console.log(view_growth_rate+"% growth rate of views.")

console.log(``)
console.log("---------------------------------------------------------------------")    
console.log(``)
    let predict_month = prompt("Ok. Let's see how you see yourself in: (months)")
console.log(``)
console.log("---------------------------------------------------------------------")    
console.log(``)

exponentialGrowthSub();
exponentialGrowthView();

function exponentialGrowthSub(){
    console.log("---------------------- || Subs Growth Rate || ----------------------")
    const rates_sub = [0];
    rates_sub.push(sub_growth_rate);

    const expected_sub = [];
    expected_sub.push(month_1_subs);
    expected_sub.push(actual_subs);

    let i= 0;

        for(i = (2); i <= predict_month; i++){
            rates_sub[i] = parseFloat(((rates_sub[i-1] + rates_sub[i-2])*0.60).toFixed(2));
            rates_sub.push(rates_sub);
            expected_sub[i] = parseFloat(((expected_sub[i-1])*(1+(rates_sub[i])/125)).toFixed(0));
            expected_sub.push(expected_sub);
            console.log(`The prevision on month: ${i} is expected to be : ${rates_sub[i]}%.`);
            console.log(`By the growth rate we expect about: ${expected_sub[i]} new subs this month.`);
            console.log(``);
        }
}


function exponentialGrowthView(){
    console.log("---------------------- || Views Growth Rate || ----------------------")
    const rates_view = [0];
    rates_view.push(view_growth_rate);

    const expected_view = [0];
    expected_view.push(month_1_views);
    expected_view.push(actual_views);

    let i= 0;
    
        for(i = (2); i <= predict_month; i++){
            rates_view[i] = parseFloat(((rates_view[i-1] + rates_view[i-2])*0.60).toFixed(2));
            expected_view[i] = parseFloat(((expected_view[i-1])*(1+(rates_view[i])/150)).toFixed(0));
            expected_view.push(expected_view);
            console.log(`The prevision on month: ${i} is expected to be : ${rates_view[i]}%.`);
            console.log(`By the growth rate we expect about: ${expected_view[i]} new views this month.`);
            console.log(``);
        }
}