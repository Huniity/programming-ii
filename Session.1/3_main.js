// loops -> for (inicializa a variável; condição, incremento) -> condicional -> retorno
// loops exterior -> primeiro loop que itera todos os numeros
// loops interior -> segundo loop que itera todos os numeros a partir do index seguinte ao primeiro loop

const nums = [2,15,11,7]
const target = 9
const num_length = nums.length


/*

function twoSum(){
    // O(n²)
    for(let x = 0; x < num_length; x++){
        for(let y = x+1; y < num_length; y++){
            if(nums[x]+nums[y] == target){
                console.log(`The sum of ${nums[x]} (index: ${x}) and ${nums[y]} (index: ${y}) matches the target: ${target}`)
                return [x,y]
            }
        }
    }
    return console.log(`Not possible to match the target: ${target}`)
}
twoSum()

*/

function twoSum(){
    // O(n)
    const map = new Map();

    for(let x = 0; x < num_length; x++){
        let dif = target - nums[x]
            if(map.has(dif)) {
                console.log(`Match found! : ${nums[x]} + ${dif} = ${target}`)
                return console.log([map.get(dif), x])
            }
            map.set(nums[x], x)
    }
    return console.log(`Not possible to match the target: ${target}`)
}

twoSum()



