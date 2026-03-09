//567. Permutation in String
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isHashSame(hashS, hashW) {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] != hashW[i]) {
            return false;
        }
    }
    return true;
}

var checkInclusion = function (s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let window_length = s1.length;

    for (let i = 0; i < window_length; i++) {
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }

    let i = 0;
    let j = window_length - 1;

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        } else {
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }

    return false;

};

//239. Sliding Window Maximum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (arr, k) {
    let res = [];
    let q = [];
    let i = j = 0;
    while (j < arr.length) {

        //Push current element after removing all the smaller from last(back)
        while (q.length && arr[j] > q[q.length - 1]) { q.pop(); }
        q.push(arr[j]);

        //When window size is k
        if (j >= k - 1) {
            res.push(q[0])
            //If leftmost element for current window(arr[i]) is largest q[0] 
            //than remove it 
            arr[i] === q[0] && q.shift();
            ++i;
        }
        ++j;
    }
    return res;

};