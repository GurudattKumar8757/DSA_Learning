//17. Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let letters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    let ans = [];

    function backtrack(path, index) {
        if (index === digits.length) {
            ans.push(path.join(""));
            return;
        }
        let choices = letters[digits[index]];
        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backtrack(path, index + 1);
            path.pop();
        }
    }

    backtrack([], 0);
    return ans;
};


//47. Permutations II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let ans = [];
    nums.sort((a, b) => (b - a));

    function backtrack(path, choices) {
        if (path.length === nums.length) {
            ans.push([...path]);
        }

        for (let i = 0; i < choices.length; i++) {
            if (i > 0 && choices[i - 1] === choices[i])
                continue;

            path.push(choices[i]);
            backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
            path.pop();
        }
    }

    backtrack([], nums);
    return ans;
};