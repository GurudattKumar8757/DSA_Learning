//1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let pairToFind = target - nums[i];
        if (map[pairToFind] && i != map[pairToFind]) {
            return [i, map[pairToFind]];
        }
    }

};

//167. Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        if ((nums[l] + nums[r]) > target) {
            r--;
        } else if ((nums[l] + nums[r]) < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }
};

//392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sLength = s.length;
    let tLength = t.length;
    let i = 0;
    let j = 0;
    while (j < tLength) {
        if (s[i] === t[j]) {
            ++i;
            ++j;
        } else {
            ++j
        }
    }

    return i === sLength ? true : false;
};

//28. Find the Index of the First Occurrence in a String
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (s, t) {
    let n = s.length;
    let ws = t.length;
    for (let i = 0; i <= n - ws; i++) {
        let j = 0;
        for (j = 0; j < ws; j++) {
            if (s[i + j] !== t[j])
                break;
        }
        if (j === ws)
            return i
    }
    return -1;
};