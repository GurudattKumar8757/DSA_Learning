//162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m
        }
    }
    return r;
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
//278. First Bad Version
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1
            } else {
                r = m;
            }
        }
        return r;
    };
};