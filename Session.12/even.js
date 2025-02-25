 function* list(numOfItems){
     for (let num=1; num<numOfItems;num++){
        
         yield num;
     }
     console.log("Even numbers have been processed.")
 }
 let totalItems=20;
 let items = list(totalItems);
 let max = 3;
 let count = 0;

 while(!items.done && !isNaN(items.next().value))
    if (count < max){
    console.log(`Your first 3 numbers: ${items.next().value}`);
    count += 1
}

//////////////////////////////////

let max2 = 3;
let count2 = 0;
function* list2(numOfItems2) {
    for (let num2 = 2; num2 <= numOfItems2 * 2; num2 += 2){ 
        yield num2;
    }
}

let totalItems2 = 3; 
const items2 = list2(totalItems2)
    console.log(items2.next().value)
    console.log(items2.next().value)
    console.log(items2.next().value)


    ///////////////////////////////////

    function* list3(numOfItems3){
        for (let num3=1; num3<numOfItems3;num3++){
           
            yield num3;
        }
        console.log("Even numbers have been processed.")
    }
    let totalItems3=50;
    let items3 = list3(totalItems3);
    let begin = 10;
    let end = 20;
   
    console.log(Array.from([items3[begin], items3[end], 1], (x) => x + x));



 

