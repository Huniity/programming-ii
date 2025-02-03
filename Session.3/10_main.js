console.time("fibonacci")
function numFibonacci(number){

let arr = [0, 1];
let i= 0;

    for(i = 2; i <= number; i++){
        arr[i] = arr[i-1] + arr[i-2]; 
    }
    console.log(arr[number]);
    console.log(arr);
}
numFibonacci(10);
console.timeEnd("fibonacci")

//

console.time("fibonacci2")
function fibonacci(number2){
    let sequencia = [];
    if(number2 === 0) return 0;
    sequencia.push(0);
    if(number2 === 1) return sequencia[0];
    sequencia.push(1);
    for(let x = 2; x <= number2; x++){
        const proximo = sequencia[x-1] + sequencia[x-2];
        sequencia.push(proximo);
    }
    return sequencia[number2];
}

console.info(fibonacci(10))
console.timeEnd("fibonacci2")

//

console.time("fibonacci3")
const newFibo = (number3) => {
    if (number3 === 0) return 0;
    if (number3 === 1) return 1;
    return newFibo(number3-2) + newFibo(number3-1)
}

console.error(newFibo(10));
console.timeEnd("fibonacci3")

