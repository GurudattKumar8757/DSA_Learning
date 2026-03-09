//Split a String in Balanced Strings
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let resCount = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "R") {
            ++count;
        } else {
            --count;
        }
        if (count==0) {
            ++resCount;  
        }
    }

    return resCount;
};

//Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("");

    for (let x = 0; x < s.length; x = x + 2 * k) {
        let n = k;
        let mid = Math.floor(k / 2);
        for (let i = 0; i < mid; i++) {
            let temp = s[x + i];
            s[x + i] = s[x + k - 1 - i];
            s[x + k - 1 - i] = temp;
        }
    }
    return s.join("");
};