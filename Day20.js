//242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    let charMap = {};
    for (let i = 0; i < s.length; i++) {
        !charMap[s[i]] ? charMap[s[i]] = 1 : ++charMap[s[i]];
    }
    for (let i = 0; i < t.length; i++) {
        if (!charMap[t[i]] || charMap[t[i]] < 0) {
            return false;
        } else {
            --charMap[t[i]];
        }
    }

    return true;
};

//205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length)
        return false;

    let mapStoT = {};
    let mapTtoS = {};

    for (let i = 0; i < s.length; i++) {
        if ((mapTtoS[t[i]] && mapTtoS[t[i]] !== s[i]) || (mapStoT[s[i]] && t[i] != mapStoT[s[i]])) {
            return false;
        } else {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
    }
    return true;
};