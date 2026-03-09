function moveZeroes(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[x];
            nums[x] = temp;
            x = x + 1;
        }
    }
}

let nums = [];
moveZeroes(nums);
console.log(nums);

console.log("------------------");

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0) {
            maxCount = count > maxCount ? count : maxCount;
            count = 0;
        } else {
            count=count+1;
        }
    }

    return count > maxCount ? count : maxCount;
}

let nums = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums))