//69:Sqrt(x)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2)
        return x;


    let ans = 0;
    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));
        if (x === mid ** 2) return mid;
        x > mid ** 2 ? l = mid + 1 : r = mid - 1;
    }
    return Math.floor(r);
};

//33. Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            return m;
        }
        if (arr[m] >= arr[l]) {
            if (target < arr[m] && target >= arr[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;
};