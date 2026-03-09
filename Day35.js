//3. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let i = 0;
    let charMap = {};
    let maxWS = 0;

    for (let j = 0; j < n && i < n; j++) {
        if (charMap[s[j]] != undefined && charMap[s[j]] >= i) {
            i = charMap[s[j]] + 1;
        }
        charMap[s[j]] = j;
        maxWS = Math.max(maxWS, (j - i + 1));
    }
    return maxWS;
};

//424. Longest Repeating Character Replacement
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var isValidMap = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;
    for (let i = 0; i < 26; i++) {
        totalCount += map[i];
        maxCount = Math.max(maxCount, map[i]);
    }
    return totalCount - maxCount <= k;
}
var characterReplacement = function (s, k) {
    let n = s.length;
    let i = 0;
    let j = 0;
    let maxWS = 0;
    let charMap = Array(26).fill(0);
    charMap[s.charCodeAt(0) - 65] = 1;

    while (j < n) {
        if (isValidMap(charMap, k)) {
            maxWS = Math.max(maxWS, j - i + 1);
            ++j;
            ++charMap[s.charCodeAt(j) - 65];

        } else {
            --charMap[s.charCodeAt(i) - 65];
            ++i;
        }
    }

    return maxWS;
};