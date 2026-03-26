//66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (arr) {
    let n = arr.length;
    let rem = 0;
    arr[n - 1] = arr[n - 1] + 1;
    for (let i = n - 1; i >= 0; i--) {
        let currSum = arr[i] + rem;
        if (currSum > 9) {
            arr[i] = currSum % 10;
            rem = Math.floor(currSum / 10);
        } else {
            arr[i] = currSum;
            rem = 0;
        }
        if (currSum < 10) {
            break;
        }
    }

    if (rem != 0) {
        arr.unshift(rem);
    }

    return arr;
};