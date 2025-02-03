let x = prompt("What number are we calculating?");
let n = prompt(`Choose the power?`);
console.log(`Ok let's do ${x}^${n}`)

function calculateXn(){

    let arr = [];

        if(x === 0) return 0;
        if(x === 1) return arr[0];
        arr.push(1);
            
        for(let i = 1; i <= n; i++){
            arr[i] = arr[i-1] * (i); 
        }
        
        console.log(arr[n]);
        console.log(arr);
    }
    calculateXn();