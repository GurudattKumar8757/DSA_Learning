//77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let ans = [];

    function backtracking(path, start) {
        if (path.length == k) {
            ans.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i)
            backtracking(path, i + 1);
            path.pop();
        }

    }

    backtracking([], 1);
    return ans;
};