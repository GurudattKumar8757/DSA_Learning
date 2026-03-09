//739. Daily Temperatures
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let map = Array(n).fill(0);
    let stack = [];
    map[n - 1] = 0;
    stack.push(n - 1);
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temperatures[i] >= temperatures[top]) {
                stack.pop();
            } else {
                map[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }


    return map;
};

//503. Next Greater Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(nums[n - 1])
    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (nums[i % n] < top) {
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(nums[i % n]);
    }
    return ans.slice(0, n);
};

//994. Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];

    //First Add all the rotten oranges in queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }

    let maxMinute = 0;

    //Mark the adj nodes as rotten and push in queue till it's not empty

    while (queue.length) {
        let [x, y, level] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        maxMinute = Math.max(level, maxMinute)
    }

    //Finally run over each element and check if any fresh is remaining
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }

    return maxMinute;
};