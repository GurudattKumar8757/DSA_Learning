//852. Peak Index in a Mountain Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] > arr[m + 1]) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return r;
};

//658. Find K Closest Elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((x - arr[m]) > (arr[m + k] - x)) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return arr.slice(l, l + k);
};