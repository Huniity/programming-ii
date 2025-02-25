// Brute Force

function bruteMax(nums) {

    const maxProduct = nums[0] * nums[1];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    return maxProduct;
}

console.log(bruteMax([3, 5, -2, 9, -8]));



// Sort Array

function sortMax(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    
    return Math.max(nums[n - 1] * nums[n - 2], nums[0] * nums[1]);
}


console.log(sortMax([3, 5, -2, 9, -8]));