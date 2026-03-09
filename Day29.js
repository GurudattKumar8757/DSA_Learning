//153. Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        //If Searching space is sorted
        if (arr[l] <= arr[r]) {
            return arr[l];
        }
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m - 1]) {
            return arr[m];
        } 

        //If left half is non sorted
        if (arr[m] < arr[l]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

};

var searchRange = function (a, t) {
    let ans = [-1, -1]
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (a[m] === t) {
            ans[0] = m;
            r = m - 1;
        } else if (a[m] < t) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }


    l = 0;
    r = a.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (a[m] === t) {
            ans[1] = m;
            l = m + 1;
        } else if (a[m] < t) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return ans;
};