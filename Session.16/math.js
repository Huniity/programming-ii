// const WRONGTYPES= [
//     "string",
//     "function",
//     "object",
//     "boolean",
//     "undefined",
//     "null"
// ]

export function sum(a,b){
    return a+b
}

export function subtract(a,b){
    // if(WRONGTYPES.includes(typeof a) || WRONGTYPES.includes(typeof b))
    if(typeof a != "number" || typeof b != "number") 
        throw new Error("not possible")
    return a-b
}