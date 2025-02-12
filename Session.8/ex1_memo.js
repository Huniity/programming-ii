const fs = require('fs');

function knapsackMemo() {
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

    const memo = new Map();
    const choice = new Map();
    items.sort((a, b) => b.weight === a.weight ? b.value - a.value : b.weight - a.weight);
    console.log(items);

    function helper(index, remainCap) {
        if (index < 0 || remainCap === 0) return 0;

        let key = `${index}-${remainCap}`;
        if (memo.has(key)) return memo.get(key); //checks the memo

        if (items[index].weight > remainCap) {
            let result = helper(index - 1, remainCap);
            memo.set(key, result);
            return result;
        }

        let includeItem = items[index].value + helper(index - 1, remainCap - items[index].weight);
        let excludeItem = helper(index - 1, remainCap);

        let result;
        if (includeItem > excludeItem) {
            result = includeItem;
            choice.set(key, true);
        } else {
            result = excludeItem;
            choice.set(key, false);
        }

        memo.set(key, result);
        return result;
    }

    let maxValue = helper(items.length - 1, capacity);

    let remainCap = capacity;
    let chosenItems = [];

    for (let i = items.length - 1; i >= 0; i--) {
        let key = `${i}-${remainCap}`;
        if (choice.get(key) === true) {
            chosenItems.push(items[i]);
            remainCap -= items[i].weight;
        }
    }

    console.log("\nSelected Items:");
    console.table(chosenItems);

    return maxValue;
}

console.log("\nMax Value:", knapsackMemo());