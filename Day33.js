//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxWater = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        maxWater = Math.max(maxWater, area);
        if (height[i] < height[j]) {
            ++i;
        } else {
            --j;
        }
    }
    return maxWater;
};


//15.3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            twoSum(arr, i, ans);
        }
    }

    return ans;
};

var twoSum = function (nums, x, ans) {
    let i = x + 1;
    let j = nums.length - 1;

    while (i < j) {
        let sum = nums[x] + nums[i] + nums[j];
        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([nums[x], nums[i], nums[j]]);
            ++i; --j;
            while (i < j && nums[i] == nums[i - 1]) ++i;
        }
    }
};