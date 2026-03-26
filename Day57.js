//78. Subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];

    function backtrack(path, start) {
        ans.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    }

    backtrack([], 0);
    return ans;
};