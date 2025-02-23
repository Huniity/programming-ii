/**
 *  Class Math to be imported as module for main.js for calculation of array of number.
 */

export class Maths{
    constructor(){}

/**
 *  Sum function to sum numbers of array.
 * @param {Array} numbers
 * @return {number}
 */

    sum(numbers){
        return numbers.reduce((a,b) => a + b, 0);
    } 

/**
 *  Average function to sum numbers of array.
 * @param {Array} numbers
 * @return {number}
 */

    average(numbers){
        return this.sum(numbers)/numbers.length;
    }

/**
 *  Median function to sum numbers of array.
 * @param {Array} numbers
 * @return {number}
 */

    median(numbers){
            const sorted = Array.from(numbers).sort((a, b) => a - b);
            const middle = Math.floor(sorted.length / 2);

            return sorted[middle];
        }
    }