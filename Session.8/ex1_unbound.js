const fs = require('fs');
function knapSack() {  

  const rawData = fs.readFileSync('random.json', 'utf-8');
  const items = JSON.parse(rawData)
    const capacity = 13;
    let remainCap = capacity;

  items.sort((a,b) => b.weight == a.weight ? b.value - a.value : b.weight - a.weight)

    console.log(items)
    
    let totalValue = 0;

    for (const item of items) {
        while (remainCap >= item.weight) {
            remainCap -= item.weight;
            totalValue += item.value;
            console.log(`Added item with weight ${item.weight} and value ${item.value}. Remaining capacity: ${remainCap}`);
        }
    }
    return totalValue;
}


console.log(knapSack());

function generateWV(){
  const items = Array.from({ length: 10 }, () => ({
     weight: Math.floor(Math.random() * 5) + 1, // Random weight between 1 and 10
     value: Math.floor(Math.random() * 6) + 5,  // Random value between 5 and 50
   }));
  
   fs.writeFileSync('random.json', JSON.stringify(items, null, 2));
 }

generateWV()

