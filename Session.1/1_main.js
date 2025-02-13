const arr = [0,0,1,2,1,3,4,5,5,5,6,7,7,8,9,10,10]
const duplicated_arr = []
console.log(arr)


function findDuplicates(){
    arr.forEach((item, index) => 
        { 
            if (arr[index] == arr[index + 1]){
                console.log(`O número ${item} no index: ${index} é duplicado`)
                duplicated_arr.push(item)
            }
        }
)}
findDuplicates(arr)
console.log("O novo array de números duplicados é: "+ duplicated_arr)