// Generator example
function* countToThree() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Custom iterable object
  const customIterable = {
    [Symbol.iterator]: function* () {
      yield "a";
      yield "b";
    },
  };
  
  // Usage:
  const generator = countToThree();
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value); // 1
  
  for (const item of customIterable) {
    console.log(item); // "a", "b"
  }


  function* list(numOfItems){
    let arr = new Array(numOfItems).fill(true);
    for (const item of arr){
        yield item;
    }
    console.log("Finished")
  }


let items = list(10)

for (const n of items){
    console.log(items.next().value);
}


function* list3(numOfItems3){
    for (let num3=0; num3<numOfItems3;num3++){
        yield num3;
    }
    console.log("Finished")
}
let totalItems3=10;
let items3 = list3(totalItems3);


let getNext = true;
while(getNext){
    let nextItem = items3.next();
    console.log(nextItem.value);
    if(getNext)
        getNext = !nextItem.done
}
    console.log("All processed")
