/* let arr = [0,0,1,2,1,3,4,5,5,5,6,7,7,8,9,10,10]
console.log("The original arry is "+ arr)
let duplicated_arr = [];


function findDuplicates(){
    let count = []
    arr.forEach((item) => 
        { 
            if (!duplicated_arr.includes(item)){
                duplicated_arr.push(item);
            }
        }
)}
findDuplicates(arr)
console.log("The new array of non duplicated items: "+ duplicated_arr)
*/
const array = [1, 2, 3, 2, 4, 5, 4, 5];

const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

console.log(duplicates); // Output: [2, 4, 5]