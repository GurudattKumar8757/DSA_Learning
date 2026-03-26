//46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [];

    function backtracking(path) {
        if (path.length == nums.length) {
            ans.push([...path]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i]);
                backtracking(path)
                path.pop();
            }
        }
    }
    backtracking([]);
    return ans;
};


//90. Subsets II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [];
    nums.sort((a, b) => (a - b));
    function backtrack(path, start) {
        ans.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i - 1] === nums[i])
                continue
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    }

    backtrack([], 0);
    return ans;
};


//39. Combination Sum
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let ans = [];

    function backtrack(remainingSum, path, start) {
        if (remainingSum === 0)
            ans.push([...path])

        if (remainingSum <= 0)
            return;
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remainingSum - candidates[i], path, i);
            path.pop();
        }

    }

    backtrack(target, [], 0);
    return ans;
};


//40. Combination Sum II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let ans = [];
    candidates.sort((a, b) => (b - a));
    function backtrack(remainingSum, path, start) {
        if (remainingSum === 0) {
            ans.push([...path]);
        }

        if (remainingSum <= 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i - 1] == candidates[i])
                continue;
            path.push(candidates[i]);
            backtrack(remainingSum - candidates[i], path, i + 1);
            path.pop();
        }
    }
    backtrack(target, [], 0);

    return ans;

};


//216. Combination Sum III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let ans = [];

    function backtrack(remainingSum, path, start) {
        if (remainingSum === 0 && path.length == k) {
            ans.push([...path])
        }

        if (remainingSum <= 0) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(remainingSum - i, path, i + 1);
            path.pop();
        }
    }

    backtrack(n, [], 1);
    return ans;
};