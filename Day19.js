//125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */

function isCharLetter(char) {
    return /^[a-z0-9]$/i.test(char);
}

var isPalindrome = function (s) {
    s = s.toLowerCase();
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (isCharLetter(s[i])) {
            temp = temp + s[i];
        }
    }
    s = temp;
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
};

var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] == s[j]) {
            i++;
            j--;
        } else if (!s[i].match(/[a-z0-9]/i)) {
            i++;
        } else if (!s[j].match(/[a-z0-9]/i)) {
            j--;
        } else {
            return false;
        }
    }
    return true;
};

//1903. Largest Odd Number in String

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let res = "";
    let i = num.length - 1;
    while (i >= 0) {
        if (parseInt(num[i]) % 2 == 0) {
            --i;
        } else if (parseInt(num[i]) % 2 != 0) {
            break;
        }
    }
    for (let j = 0; j <= i; j++) {
        res = res + num[j];
    }

    return res;
};

var largestOddNumber = function (num) {
    let res = "";
    let i = num.length - 1;
    while (i >= 0) {
        if (parseInt(num[i]) % 2 != 0) {
            return num.substring(0, i + 1);
        }
        --i;
    }

    return "";
};

//14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) {
        return strs[0];
    }
    let i = 0;
    for (; i < strs[0].length; i++) {
        let j = 1;
        while (j < strs.length) {
            if (strs[j][i] != strs[0][i]) {
                return strs[0].substring(0, i);
            }
            j++;
        }
    }
    if (i == strs[0].length) {
        return strs[0];
    }

    return "";
};

var longestCommonPrefix = function (strs) {
    let x = 0;
    while (x < strs[0].length) {
        let ch = strs[0][x];
        for (let i = 0; i < strs.length; i++) {
            if (ch != strs[i][x] || x == strs[i].length) {
                return strs[0].substring(0, x);
            }
        }
        x++;
    }

    return strs[0];
};