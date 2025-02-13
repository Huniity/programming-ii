let str = prompt("Insert the string you want to permutate.");
permutate();

function permutate(){
if (str.length < 2 || str.length == null || str.length == NaN || str.length == undefined) return console.log("String is too short to be permutate.");
}

let permutated_str = [];

for(let i = 0; i <= str.length; i++){
    arr[i] = arr[i-1] + arr[i-2]; 
}