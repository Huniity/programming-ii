const fs = require('fs');

function knapsackDP() {
    let rawData;
    try {
        rawData = fs.readFileSync('random.json', 'utf-8');
        items = JSON.parse(rawData);
    } catch (error) {
        console.error("Error: File doesn't exist.");
        return;
    }

    if (!Array.isArray(items) || items.some(item => typeof item.weight !== 'number' || typeof item.value !== 'number')) {
        console.error("Error: Weight and value are not numbers.");
        return;
    }

    const capacity = 10;
    if (capacity <= 0) {
        console.error("Error: Capacity can't be 0.");
        return;
    }


    const dp = Array(items.length + 1).fill().map(() => Array(capacity + 1).fill(0));


    for (let i = 1; i <= items.length; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (items[i - 1].weight <= w) {

                dp[i][w] = Math.max(dp[i - 1][w], items[i - 1].value + dp[i - 1][w - items[i - 1].weight]);
            } else {

                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let maxValue = dp[items.length][capacity];


    let remainingCapacity = capacity;
    let chosenItems = [];

    for (let i = items.length; i > 0; i--) {
        if (dp[i][remainingCapacity] !== dp[i - 1][remainingCapacity]) {
            chosenItems.push(items[i - 1]);
            remainingCapacity -= items[i - 1].weight;
        }
    }

    console.log("\nDP Table:");
    console.table(dp);

    console.log("\nSelected Items:");
    console.table(chosenItems);

    return maxValue;
}

console.log("\nMax Value:", knapsackDP());
